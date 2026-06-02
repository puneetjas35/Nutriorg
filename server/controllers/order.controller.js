import cartProductModel from "../models/cartProduct.model.js"
import OrderModel from "../models/order.model.js"
import UserModel from "../models/user.model.js"
import mongoose from "mongoose"
import Stripe from "../config/stripe.js"

export async function CashOnDeliveryOrderController(request, response) {
    try {
        const userId = request.userId //middleware auth
        const { list_items, totalAmt, addressId, subTotalAmt } = request.body


        const payload = list_items.map(el => {
            return (
                {
                    userId: userId,
                    OrderId: `ORD-${new mongoose.Types.ObjectId()}`,
                    productId: el.productId._id,
                    product_details: {
                        name: el.productId.title || el.productId.name,
                        image: el.variantId?.image || el.productId?.image || "",
                        variant: el.variantId?.label || null
                    },
                    paymentId: "",
                    payment_status: "CASH ON DELIVERY",
                    delivery_address: addressId,
                    subTotalAmt: subTotalAmt,
                    totalAmt: totalAmt,
                }
            )
        })

        const generateOrder = await OrderModel.insertMany(payload)


        //remove from cart when ordered successfully
        const removeCartItems = await cartProductModel.deleteMany({ userId: userId })
        const updateInUser = await UserModel.updateOne({ _id: userId }, { shopping_cart: [] })

        return response.json({
            message: "Order Successful",
            error: false,
            success: true,
            data: generateOrder
        })

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })

    }
}

export const pricewithDiscount = (price, dis = 0) => {
    const actualPrice = price - (price * dis) / 100
    return Math.round(actualPrice)
}

// export async function paymentController(request, response) {

//     try {


//         const userId = request.userId //auth middleware
//         const { list_items, totalAmt, addressId, subTotalAmt } = request.body
//         //console.log("LIST ITEMS:", JSON.stringify(list_items, null, 2))

//         const user = await UserModel.findById(userId)

//         const line_items = list_items.map(item => {
//             const unitamt = item?.variantId?.price || item?.productId?.price;
//             return {
//                 price_data: {
//                     currency: 'inr',
//                     product_data: {
//                         name: `${item?.productId?.title || item?.productId?.name} ${item?.variantId?.label || ""}`,
//                         images: item?.variantId?.image
//                             ? [item.variantId.image]
//                             : item?.productId?.image
//                                 ? [item.productId.image]
//                                 : [],
//                         metadata: {
//                             productId: item?.productId?._id,
//                             variantId: item?.variantId?._id,
//                             variantLabel: item?.variantId?.label || null
//                         }
//                     },


//                     unit_amount: Math.round(unitamt * 100)
//                 },
//                 adjustable_quantity: {
//                     enabled: true,
//                     minimum: 1
//                 },
//                 quantity: item.quantity
//             }
//         })

//         const params = {
//             submit_type: "pay",
//             mode: "payment",
//             payment_method_types: ['card'],
//             customer_email: user.email,
//             metadata: {
//                 userId: userId,
//                 addressId: addressId
//             },
//             line_items: line_items,
//             success_url: `${process.env.FRONTEND_URL}/success`,
//             cancel_url: `${process.env.FRONTEND_URL}/cancel`

//         }

//         const session = await Stripe.checkout.sessions.create(params)
//            console.log("Stripe session:", session);
//         return response.status(200).json({
//             url: session.url
//         })

//     } catch (error) {
//         return response.status(500).json({
//             message: error.message || error,
//             error: true,
//             success: false
//         })
//     }
// }
export async function paymentController(request, response) {
    try {
        const userId = request.userId // auth middleware 
        const { list_items, totalAmt, addressId, subTotalAmt } = request.body

        const user = await UserModel.findById(userId)

        // const line_items = list_items.map(item => {
        //     return {
        //         price_data: {
        //             currency: 'inr',
        //             product_data: {
        //                 name: item?.productId?.title || item?.productId?.name || "Product",
        //                 // images : item.productId.image,
        //                 images: item?.productId?.image
        //                     ? [item.productId.image]
        //                     : [],
        //                 metadata: {
        //                     productId: String(item.productId._id)
        //                 }
        //             },
        //             unit_amount: pricewithDiscount(item.productId.price, item.productId.discount) * 100
        //         },
        //         adjustable_quantity: {
        //             enabled: true,
        //             minimum: 1
        //         },
        //         quantity: item.quantity
        //     }
        // })

        const line_items = list_items.map(item => {
            const isVariant = item?.variantId;

            const unitPrice = isVariant
                ? item.variantId.price
                : item.productId.price;

            const image = isVariant
                ? item.variantId.image
                : item.productId.image;

            const name = `${item?.productId?.title || item?.productId?.name} ${isVariant ? item.variantId.label : ""
                }`;

            return {
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: name,
                        images: image ? [image] : [],
                        metadata: {
                            productId: String(item.productId._id),
                            variantId: isVariant ? String(item.variantId._id) : "",
                            variantLabel: isVariant ? item.variantId.label : ""
                        }
                    },
                    unit_amount: Math.round(unitPrice * 100)
                },
                quantity: item.quantity
            };
        });


        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            customer_email: user.email,
            metadata: {
                userId: userId,
                addressId: addressId
            },
            line_items: line_items,
            success_url: `${process.env.FRONTEND_URL}/success`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`
        }

        const session = await Stripe.checkout.sessions.create(params)

        return response.status(200).json({
            url: session.url
        })

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

const getOrderProductItems = async ({ lineItems, addressId, userId, paymentId, payment_status, orderTotal }) => {
    const productList = []
    if (lineItems?.data?.length) {
        for (const item of lineItems.data) {
            const product = await Stripe.products.retrieve(item.price.product)
            console.log("item", item);
            console.log("Stripe product:", product);


            const payload = {
                userId: userId,
                OrderId: `ORD-${new mongoose.Types.ObjectId()}`,
                productId: product.metadata.productId,
                product_details: {
                    name: product.name,
                    image: product.images?.[0] || "",
                    variant: product.metadata.variantLabel || null
                },
                paymentId: paymentId,
                payment_status: payment_status,
                delivery_address: addressId,
                subTotalAmt: Number(item.amount_total / 100),
                totalAmt: orderTotal,
            }

            productList.push(payload)
        }
    }

    return productList
}

//http://localhost:8000/api/order/webhook
// export async function webhookStripe(request, response) {
//     const event = request.body
//     const endpointSecretKey = process.env.STRIPE_ENDPOINT_WEBHOOK_SECRET_KEY

//     // console.log("event", event);


//     switch (event.type) {
//         case 'checkout.session.completed':
//             const session = event.data.object;
//             const paymentId = session.payment_intent

//             const existingOrder = await OrderModel.findOne({ paymentId: paymentId })

//             if (existingOrder) {
//                 return response.json({ received: true })
//             }

//             const lineItems = await Stripe.checkout.sessions.listLineItems(session.id)
//             const userId = session.metadata.userId

//             const orderProduct = await getOrderProductItems(
//                 {
//                     lineItems: lineItems,
//                     addressId: session.metadata.addressId,
//                     userId: userId,
//                     paymentId: session.payment_intent,
//                     payment_status: session.payment_status

//                 })
//             // console.log("orderProduct", orderProduct);


//             const order = await OrderModel.insertMany(orderProduct)

//             if (Boolean(order[0])) {
//                 const removeCartItems = await UserModel.findByIdAndUpdate(userId, {
//                     shopping_cart: []
//                 })
//                 const removeCartProductDB = await cartProductModel.deleteMany({ userId: userId })
//             }

//             // console.log(lineItems);

//             break;

//         default:
//             console.log(`Unhandled event type :${event.type}`);

//     }
//     response.json({ received: true });
// }
// export async function webhookStripe(request, response) {
//     const event = request.body;
//     const endPointSecret = process.env.STRIPE_ENPOINT_WEBHOOK_SECRET_KEY

//     console.log("event", event)

//     // Handle the event
//     switch (event.type) {
//         case 'checkout.session.completed':
//             const session = event.data.object;
//             const lineItems = await Stripe.checkout.sessions.listLineItems(session.id)
//             const userId = session.metadata.userId
//             const orderProduct = await getOrderProductItems(
//                 {
//                     lineItems: lineItems,
//                     userId: userId,
//                     addressId: session.metadata.addressId,
//                     paymentId: session.payment_intent,
//                     payment_status: session.payment_status,
//                 })

//             const order = await OrderModel.insertMany(orderProduct)

//             console.log(order)
//             if (Boolean(order[0])) {
//                 const removeCartItems = await UserModel.findByIdAndUpdate(userId, {
//                     shopping_cart: []
//                 })
//                 const removeCartProductDB = await cartProductModel.deleteMany({ userId: userId })
//             }
//             break;
//         default:
//             console.log(`Unhandled event type ${event.type}`);
//     }

//     // Return a response to acknowledge receipt of the event
//     response.json({ received: true });
// }

export async function webhookStripe(request, response) {
    console.log("🔥 WEBHOOK HIT");
    const sig = request.headers['stripe-signature'];

    let event;

    try {
        event = Stripe.webhooks.constructEvent(
            request.body,
            sig,
            process.env.STRIPE_ENDPOINT_WEBHOOK_SECRET_KEY
        );
    } catch (err) {
        console.log("Webhook Error:", err.message);
        return response.status(400).send(`Webhook Error: ${err.message}`);
    }

    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;

            const lineItems = await Stripe.checkout.sessions.listLineItems(session.id);

            const orderProduct = await getOrderProductItems({
                lineItems: lineItems,
                userId: session.metadata.userId,
                addressId: session.metadata.addressId,
                paymentId: session.payment_intent,
                payment_status: session.payment_status,
                 orderTotal: session.amount_total / 100
            });

            const order = await OrderModel.insertMany(orderProduct);

            if (order?.length) {
                await UserModel.findByIdAndUpdate(session.metadata.userId, {
                    shopping_cart: []
                });

                await cartProductModel.deleteMany({
                    userId: session.metadata.userId
                });
            }

            break;

        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    response.json({ received: true });
}

export async function getOrderDetailsController(request, response) {
    try {
        const userId = request.userId
        const orderlist = await OrderModel.find({ userId: userId }).sort({ createdAt: -1 }).populate('delivery_address')
        console.log("Orders being sent:", orderlist);

        return response.json({
            message: "Order list",
            error: false,
            success: true,
            data: orderlist
        })

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}