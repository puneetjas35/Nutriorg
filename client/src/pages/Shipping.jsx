import React from 'react'

const Shipping = () => {
    return (
        <div className='ml-10 text-start px-8'>
            <h4 className='heading about-us font-montserrat text-[25px] font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.7em]'>
                Shipping And Delivery
            </h4>
            <p className='text-black font-medium'>We strive to ensure the timely and safe delivery of your orders across all serviceable locations in India.</p>
            <div>
                <ol className='list-decimal mt-4'>
                    <li className='font-montserrat text-[20px] font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.4em]'>Shipping Coverage </li>
                    <ol className='list-decimal ml-5'>
                        <li>We deliver across most serviceable PIN codes in India.</li>
                        <li>Shipping is chargeable by default. Free shipping applies only if specifically mentioned under a promotional campaign or offer.</li>
                    </ol>
                    <li className='font-montserrat mt-5 text-[20px] font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.4em]'>Accurate Address Required</li>
                    <ol className='list-decimal ml-5'>
                        <li>Please provide a complete postal address, including pin code, email ID, and contact number, to avoid delivery delays and any other confusion.</li>
                        <li>Orders with incomplete, incorrect, or unreachable addresses may be delayed or cancelled without liability.</li>
                    </ol>
                    <li className='font-montserrat mt-5 text-[20px] font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.4em]'>Dispatch Timlines</li>
                    <ol className='list-decimal ml-5'>
                        <li>Products in stock are packed and shipped within 5 working days of order confirmation.</li>
                        <li>Orders placed on weekends or public holidays will be processed the next working day.</li>
                        <li>Delivery timelines may vary due to factors beyond our control, such as weather, strikes, or logistical delays.</li>
                    </ol>
                    <li className='font-montserrat mt-5 text-[20px] font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.4em]'>Order Tracking</li>
                    <ol className='list-decimal ml-5'>
                        <li>Once your order is dispatched, tracking details will be shared via email/SMS.</li>
                        <li>You can track your order in real-time through our website.</li>
                        <li>Please allow some time after dispatch for tracking to be updated by the courier.</li>
                    </ol>
                    <li className='font-montserrat mt-5 text-[20px] font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.4em]'>Packaging & Handling</li>
                    <ol className='list-decimal ml-5'>
                        <li>All products are packed with care to preserve freshness and prevent tampering.</li>
                        <li>If your package appears tampered, opened, or damaged upon delivery, please refuse to accept it and inform us immediately via email or phone.</li>
                        <li>Once accepted, no claim for damage, return, or refund will be entertained on the grounds of tampering.</li>
                    </ol>
                    <li className='font-montserrat mt-5 text-[20px] font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.4em]'>Partial Shipment</li>
                    <ol className='list-decimal ml-5'>
                        <li>Orders containing multiple products may be shipped in separate consignments due to logistics, warehouse locations, or product availability. You will be notified in such cases, and tracking will be provided for each shipment.</li>
                    </ol>
                    <li className='font-montserrat mt-5 text-[20px] font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.4em]'>Undelivered Orders</li>
                    <ol className='list-decimal ml-5'>
                        <li>Our courier partner will attempt delivery up to 3 times.</li>
                        <li>If the package remains undelivered due to customer unavailability or incorrect address, it will be returned to the origin.</li>
                        <li>In such cases, no refund will be issued. Re-shipping will be possible at an additional shipping cost borne by the customer.</li>
                        <li>Additional shipping charges may apply for re-delivery.</li>
                    </ol>
                    <li className='font-montserrat mt-5 text-[20px] font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.4em]'>Limitation of Liability</li>
                    <ol className='list-decimal ml-5'>
                        <li>We are not liable for any indirect, incidental, or consequential damages arising from shipping delays, lost packages, or service interruptions beyond our control. Our liability is limited to the value of the product ordered.</li>

                    </ol>
                    <li className='font-montserrat mt-5 text-[20px] font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.4em]'>Bulk & Vendor Orders</li>
                    <ol className='list-decimal ml-5'>
                        <li>Product(s) required</li>
                        <li>Approximate quantity</li>
                        <li>Delivery address with PIN code</li>
                        <li>Preferred dispatch timeline</li>
                        <li>Any customization or packaging requests</li>
                        <li>GST number (If any)</li>
                        <li>For bulk orders, institutional inquiries, or custom packaging, please reach out at sales@nutriorg.com</li>
                        <li>Our team will respond with pricing, availability, and shipping timelines.</li>
                    </ol>
                    <li className='font-montserrat mt-5 text-[20px] font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.4em]'>Support</li>
                    <ol className='list-decimal ml-5'>

                        <li>For any assistance or clarification, please contact us at
                          <br />  📧sales@nutriorg.com
                           <br /> 📞9119105555</li>
                    </ol>

                </ol>
            </div>

        </div>


    )
}

export default Shipping