import CartProductModel from "../models/cartProduct.model.js"
import UserModel from "../models/user.model.js"
import ProductModel from "../models/product.model.js"
// import ProductVariant from "../models/productVariant.model.js"

export const addToCartItemController = async (request, response) => {
    try {
        console.log("BODY:", request.body)
        console.log("USER:", request.userId)
        const userId = request.userId
        const { productId, variantId } = request.body

        if (!productId) {
            return response.status(400).json({
                message: "Provide productId",
                error: true,
                success: false
            })
        }
        const product = await ProductModel.findById(productId)

        if (!product) {
            return response.status(404).json({
                message: "Product not found",
                error: true,
                success: false
            })
        }

        const checkItemCart = await CartProductModel.findOne({
            userId,
            productId,
            variantId: variantId || null
        })



        if (checkItemCart) {
            checkItemCart.quantity += 1;
            await checkItemCart.save();

            return response.json({
                message: "Quantity updated",
                success: true,
                error: false
            });
        }

        const cartItem = new CartProductModel({
            quantity: 1,
            userId: userId,
            productId: productId,
            variantId: variantId || null

        })
        const save = await cartItem.save()

        const updateCartUser = await UserModel.updateOne({ _id: userId }, {
            $addToSet: {
                shopping_cart: productId
            }
        })

        return response.json({
            data: save,
            message: "Item added successfully",
            success: true,
            error: false
        })
    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export const getCartItemController = async (request, response) => {
    try {
        console.log("USER ID:", request.userId)
        const userId = request.userId
        const cartItem = await CartProductModel.find({
            userId: userId
        }).populate('productId')
        // .populate('variantId')
        const cartWithVariant = cartItem.map(item => {

            let variant = null

            if (item.variantId && item.productId?.variants) {
                variant = item.productId.variants.find(
                    v => v._id.toString() === item.variantId.toString()
                )
            }

            return {
                ...item.toObject(),
                variantId: variant
                    ? {
                        _id: variant._id,
                        label: variant.label,
                        price: variant.price,
                        image: variant.image
                    }
                    : null
            }
        })

        return response.json({
            data: cartWithVariant,
            error: false,
            success: true
        })

    } catch (error) {
        console.log("Cart Get Error:", error)
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export const updateCartItemQtyController = async (request, response) => {
    try {
        const userId = request.userId
        const { _id, qty } = request.body

        if (!_id || !qty) {
            return response.status(400).json({
                message: "Provide _id, qty"
            })
        }

        const updateCartItem = await CartProductModel.updateOne({
            _id: _id,
            userId: userId
        }, {
            quantity: qty
        })

        return response.json({
            message: "Updated cart",
            success: true,
            error: false,
            data: updateCartItem
        })

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })

    }
}

export const deleteCartItemQtyController = async (request, response) => {
    try {

        const userId = request.userId //middleware
        const { _id } = request.body

        if (!_id) {
            return response.status(400).json({
                message: "Provide _id",
                error: true,
                success: false
            })
        }

        const deleteCartItem = await CartProductModel.deleteOne({ _id: _id, userId: userId })
        return response.json({
            message: "Item removed",
            error: false,
            success: true,
            data: deleteCartItem
        })

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

