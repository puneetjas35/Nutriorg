import React from 'react'

const Terms = () => {
    return (
        <div>
            <div className='ml-10 text-start px-4'>
                <h4 className='heading about-us font-montserrat text-[25px] font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.7em]'>
                    Terms of Use
                </h4>

                <p>
                    Welcome to Nutriorg. By accessing or using our website
                    [https://nutriorg.com/], you agree to abide by and be bound
                    by the following Terms of Use. Please read them carefully.
                    By visiting this website, placing an order, or interacting
                    with any content, you accept these Terms of Use and our
                    Privacy Policy. If you do not agree, please do not use this site.
                </p>
            </div>

            <div>
                <ol className='list-decimal ml-10 px-8 mt-4 text-start text-[17px]'>

                    <li className='text-black font-bold py-3'>
                        Use of Website

                        <ol className='list-decimal leading-7 ml-5 font-medium text-[15px] mt-3'>

                            <li>
                                This website is intended for users who are 18 years
                                of age or older. By using this site, you confirm
                                that you are legally eligible to enter into a
                                binding contract.
                            </li>

                            <li>
                                You agree to use the website for lawful purposes
                                only and not for any activity that:

                                <ol className='list-disc ml-5 mt-2 mb-2'>
                                    <li>Violates any law or regulation</li>
                                    <li>Infringes upon intellectual property rights</li>
                                    <li>Transmits harmful or malicious content</li>
                                </ol>
                            </li>

                            <li>
                                Your use of any information or products on this
                                website is entirely at your own risk, and we shall
                                not be liable. It is your responsibility to ensure
                                that any products, services, or information
                                available through the website meet your specific needs.
                            </li>

                        </ol>
                    </li>
                    <li className='text-black font-bold'>
                        User Account
                        <ul className='font-medium text-[15px] leading-7 ml-5'>
                            <li>You are responsible for maintaining the confidentiality of your
                                account and password and for restricting access to your device.
                                You agree to accept responsibility for all activities that occur under your
                                account.
                            </li>
                        </ul>
                    </li>
                    <li className='text-black font-bold py-5'>
                        Product Information
                        <ul className='font-medium text-[15px] leading-7 ml-5'>
                            <li>All product descriptions, images, pricing, and availability are subject to change without prior notice.
                                We strive for accuracy but do not guarantee that all information is error-fre
                            </li>
                        </ul>
                    </li>
                    <li className='text-black font-bold'>
                        Orders & Payments
                        <ol className='list-decimal text-[15px] ml-7 leading-7 font-medium'>
                            <li>Orders are subject to availability and acceptance.</li>
                            <li>Order confirmation emails are acknowledgments of receipt, not acceptance.
                                We reserve the right to accept or decline an order after reviewing availability,
                                payment confirmation, and pricing accuracy.</li>
                            <li>All payments must be made via approved payment gateways, cards, or the COD option available on the site.</li>
                        </ol>

                    </li>
                    <li className='text-black font-bold py-5'>
                        Shipping, Returns & Replacements
                        <ul className='font-medium text-[15px] leading-7 ml-5'>
                            <li>Please refer to our Shipping & Delivery Policy and Return & Replacement Policy for detailed information. </li>
                        </ul>
                    </li>
                    <li className='text-black font-bold'>
                        Intellectual Property
                        <ul className='font-medium text-[15px] leading-7 ml-5'>
                            <li>All content on this website, including but not limited to text, images, logos, and graphics, is the property of Nutriorg and protected under applicable copyright laws. Unauthorized use, reproduction, or
                                redistribution is strictly prohibited, and legal actions could be taken in case of non-compliance.  </li>
                        </ul>
                    </li>
                    <li className='text-black font-bold mt-5'>
                        Website Content Disclaimer
                        <ol className='list-decimal text-[15px] ml-7 leading-7 font-medium'>
                            <li>The content on this website is provided for general informational purposes only and is subject to change without notice.</li>
                            <li>While we strive to keep the information accurate and updated, we make no warranties or guarantees, express or implied, about
                                the accuracy, completeness, reliability, or suitability of any information or materials found on this website.</li>
                        </ol>

                    </li>
                    <li className='text-black font-bold mt-5'>
                        Health Disclaimer
                        <ul className='font-medium text-[15px] leading-7 ml-4'>
                            <li>The information provided on this website is not intended as medical advice or a substitute for professional healthcare.
                                Products sold are not meant to diagnose, treat, cure, or prevent any disease.
                                Consult a qualified healthcare professional before using any product, especially if you are pregnant, nursing, taking medication, or have a medical condition.</li>
                        </ul>
                    </li>
                    <li className='text-black font-bold mt-5'>
                        Privacy and Cookies
                        <ul className='font-medium text-[15px] leading-7 ml-4'>
                            <li>Please refer to our Privacy Policy and Cookie Policy for detailed information.</li>
                        </ul>
                    </li>
                    <li className='text-black font-bold mt-5'>
                        Third Party Links
                        <ul className='font-medium text-[15px] leading-7 ml-4'>
                            <li>Our site may contain links to third-party websites. We are not responsible for the content, policies, or practices of such sites.</li>
                        </ul>
                    </li>

                </ol>
            </div>
        </div>
    )
}

export default Terms