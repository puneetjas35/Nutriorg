import React from 'react'

const Return = () => {
  return (
    <div className='ml-10 text-start px-8'>
            <h4 className='heading mt-10 font-montserrat text-[25px] font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.7em]'>
                Return, Replacement & Cancellation Policy
            </h4>
            <p className='text-black font-medium'>As we prioritize product integrity and customer safety, please take a moment to review our return and replacement guidelines:</p>
        <ol className='list-decimal ml-5 mt-4'>
            <li className='font-montserrat text-[20px] font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.7em]'>Returns</li>
            <ol className='list-decimal ml-5 font-medium'>
                <li>Due to the perishable and consumable nature of our products, <b>we do not accept returns</b> under any circumstances.</li>
                <li>This policy helps prevent risks of adulteration and ensures the highest standards of hygiene and safety.</li>
            </ol>

            <li className='font-montserrat text-[20px] font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.7em] mt-5'>Replacements</li>
            <ol className='list-decimal ml-5 font-medium'>
                <li>Replacements are only applicable <b>in case of incorrect product delivery</b> (i.e., wrong item received rather than the one ordered).</li>
                <li>To be eligible for a replacement:</li>
                <ol className='list-decimal leading-7'>
                    <li>The request must be raised <b>within 48 hrs of delivery</b>.</li>
                    <li>Clear images, order details, and Invoice number must be provided for verification, along with a complete unboxing video showing the sealed package being opened</li>
                    <li>Once verified, an estimated replacement date will be shared. After the team has confirmed eligibility, we will communicate with you regarding the pickup of the product.</li>
                    <li>The product must be <b>unused, unopened, and in its original packaging</b> to be eligible for a replacement.</li>
                    <li>We reserve the right to deny a replacement if the product appears to have been opened, tampered with, or consumed in any way.</li>
                </ol>
            </ol>
            <li className='font-montserrat text-[20px] mt-4 font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.7em]'>Order Acceptance</li>
                <ol className='list-decimal ml-5 font-medium'>
                    <li className='mb-3'>Order confirmation emails are acknowledgments of receipt, not confirmations of dispatch. We reserve the right to accept, decline, or cancel any order post-placement based on:</li>
                    <ol className='list-decimal ml-7 font-medium'>
                        <li>Product Availability</li>
                        <li>Payment Verification</li>
                        <li>Pricing or technical errors</li>
                    </ol>
                </ol>
            <li className='font-montserrat text-[20px] mt-4 font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.7em]'>Cancellations</li>
                <ol className='list-decimal ml-5 font-medium'>
                    <li>Orders can only be canceled before dispatch.</li>
                    <li>Once shipped, no cancellation, refund, or return request will be considered.</li>
                    <li>For prepaid orders, upon successful cancellation, the amount will be refunded to the original payment source within 7 working days.</li>
                </ol>
            <li className='font-montserrat text-[20px] mt-4 font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.7em]'>Refunds (if applicable)</li>
            <p className='font-medium mb-4'>Refunds are processed only in scenarios where:</p>
            <ol className='list-decimal ml-5 font-medium'>
                <li>A cancellation request is approved before dispatch</li>
                <li>A product is out of stock after order placement</li>
                <li>An order has not been fulfilled due to internal reasons</li>
                <p className='mt-3'>Refunds, if applicable, will be initiated within 7 working days to the original payment source.</p>
            </ol>
            <li className='font-montserrat text-[20px] mt-4 font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.7em]'>Contact and Resolution</li>
            <ol className='list-decimal ml-5 font-medium'>
                <li>For all issues related to orders, replacements, or cancellations, please contact our support team at sales@nutriorg.com / Ph- <b>9119105555</b> </li>
                <li>Email will be responded to within 24-48 hrs, and full assistance will be provided thereafter. </li>
                <li>We strive to resolve all genuine concerns promptly and ensure a smooth customer experience.</li>
            </ol>
        </ol>

    
    </div>
  )
}

export default Return