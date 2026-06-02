import React, { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

const faqData = [
    {
        question: "Are your products organic and certified?",
        answer: `It depends on the product:
• Our juices are not organic.
• Oats are available in both conventional and organic options.
• All of our powders are 100% organic.`
    },

    {
        question: "Do your products have preservatives or artificial additives?",
        answer:
            "Juices have preservatives to maintain a shelf life."
    },

    {
        question: "What is the shelf life of your products?",
        answer:
            "Shelf life varies by product. Always check the label for product-specific expiry dates and storage instructions."
    },

    {
        question: "How should I store your products?",
        answer:
            "Store all products in a cool, dry place away from sunlight. Once opened, tightly seal the packaging or transfer contents to an airtight container."
    },

    {
        question: "Can your juices or foods be consumed daily?",
        answer:
            "Yes, our products are designed for daily consumption as part of a balanced and healthy lifestyle. For specific health conditions, consult your physician or nutritionist."
    },

    {
        question: "How will I know if my order has been confirmed?",
        answer:
            "Once you place your order, you will receive a confirmation email and/or SMS with your order number and summary."
    },

    {
        question: "Can I change my shipping address after placing an order?",
        answer:
            "For any address change, please contact customer support before the product is dispatched."
    },

    {
        question: "How do I cancel an order?",
        answer:
            "Before dispatch, you can cancel anytime and receive a full refund. After dispatch or delivery, cancellation is not possible."
    },

    {
        question: "When will I receive my refund or replacement?",
        answer:
            "Refunds are processed within 5–7 business days. Replacements are dispatched within 3–5 business days after approval."
    },

    {
        question: "Can I exchange a product?",
        answer:
            "We don’t offer direct exchanges. Please cancel the current order (before dispatch) and place a new one."
    },

    {
        question: "How do I track my replacement or new order?",
        answer:
            "Tracking details are sent through email/SMS once the order is dispatched."
    },

    {
        question: "Do you ship internationally?",
        answer:
            "Yes, we deliver internationally. Please email us at sales@nutriorg.com."
    },

    {
        question: "How do I contact your customer support?",
        answer: <b>`📧 Email: customercare@nutriorg.com <br></br>
         📞 Phone/WhatsApp: 9119105555<br></br>
        ⏰ Support Hours: Mon–Sat, 10 AM–6 PM`</b>
    }
];

const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-[1200px] mx-auto px-6 py-14">

            <h4 className='text-start px-8 heading about-us font-montserrat text-[25px] font-semibold leading-[1.4em] text-[#6a5b5c] mb-[0.7em]'>
         FAQ Page
      </h4>

            <div className="space-y-5">

                {faqData.map((item, index) => (

                    <div
                        key={index}
                        className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                    >

                        {/* QUESTION */}
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-gray-50 transition"
                        >

                            <span className="text-left text-[18px] font-semibold text-[#6a5b5c]">
                                {item.question}
                            </span>

                            {openIndex === index ? (
                                <IoChevronUpOutline size={24} />
                            ) : (
                                <IoChevronDownOutline size={24} />
                            )}

                        </button>

                        {/* ANSWER */}
                        {openIndex === index && (
                            <div className="text-start font-medium px-6 pb-6 text-[#6a5b5c] leading-8 whitespace-pre-line text-[16px]">
                                {item.answer}
                            </div>
                        )}

                    </div>

                ))}

            </div>

        </div>
    );
};

export default FAQ;


