import React, { useEffect, useState } from "react";
import Axios from "./utils/Axios";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "./provider/GlobalProvider";
import AddToCartButton from "./AddToCartButton";
import CustomerReview from "./Product/CustomerReview";

const ProductPage = () => {
    const { fetchCartItem } = useGlobalContext();

    const { slug } = useParams();
    const [data, setData] = useState(null);
    const [selectedVariant, setSelectedVariant] = useState(null);
    const [loading, setLoading] = useState(false);

    // Fetch product based on slug
    const fetchProduct = async () => {
        try {
            setLoading(true);
            const response = await Axios.get(`/api/product/${slug}`);
            const product = response?.data?.data || response?.data;

            if (!product) {
                setData(null);
                setLoading(false);
                return;
            }

            if (product?.variants?.length > 0) {
                const sortedVariants = [...product.variants].sort(
                    (a, b) => b.price - a.price
                );
                setData({ ...product, variants: sortedVariants });
                setSelectedVariant(sortedVariants[0]);
            } else {
                setData(product);
            }

            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
            setData(null);
        }
    };

    useEffect(() => {
        if (slug) fetchProduct();
    }, [slug]);
    
    useEffect(() => {
    window.scrollTo(0, 0);
}, [slug]);

    const handleVariantChange = (variant) => {
        setSelectedVariant(variant);
    };

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (!data) return <p className="text-center mt-10">Product not found</p>;

    return (
        <div className="max-w-6xl  mx-auto">
            <div className="grid md:grid-cols-2 gap-10 relative">
                {/* PRODUCT IMAGE */}
                <div className="sticky top-5 h-fit">

                    <img
                        src={selectedVariant?.image || data?.image}
                        alt={data?.title}
                        className="w-full rounded-lg"
                    />
                </div>

                {/* PRODUCT DETAILS */}
                <div className="mt-16">
                    <h1 className="text-2xl font-bold mb-2">{data?.title}</h1>

                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="text-2xl  font-semibold text-green-600">
                            ₹{selectedVariant?.price || data?.price}
                        </span>
                        <span className="line-through text-gray-400">
                            ₹{selectedVariant?.oldPrice || data?.mrp}
                        </span>
                    </div>

                    {/* VARIANTS */}
                    {data?.variants?.length > 0 && (
                        <div className="mb-6">
                            <p className="font-semibold mb-2">Select Size</p>
                            <div className="flex gap-3 items-center justify-center">
                                {data.variants.map((variant) => (
                                    <button
                                        key={variant._id}
                                        onClick={() => handleVariantChange(variant)}
                                        className={`border px-4 py-2 rounded-md ${selectedVariant?._id === variant._id
                                            ? "border-green-600 bg-green-50"
                                            : "border-gray-300"
                                            }`}
                                    >
                                        {variant.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STOCK */}
                    <p className="mb-4">
                        {data?.inStock ? (
                            <span className="text-green-600">In Stock</span>
                        ) : (
                            <span className="text-red-500">Out of Stock</span>
                        )}
                    </p>

                    {/* ADD TO CART */}
                    <div className="bg-[rgb(92,128,24)] text-center">
                        <AddToCartButton data={data} selectedVariant={selectedVariant} />
                    </div>

                    {/* DESCRIPTION & BENEFITS */}
                    {/* PRODUCT DESCRIPTION SECTION (static text) */}
                    <div className="product-description leading-7 mt-10">
                        <p><strong className="font-extrabold">M.R.P. (250ml) : ₹369</strong></p>
                        <p>Nutriorg Sea Buckthorn juice is a 99.98% pure pulp concentrate, rich in Vitamin C, Omegas 3, 6, 9, and rare Omega 7. It supports gut health, liver function, immunity, and overall energy.</p>

                        <p className="my-3">
                            <b>Key Benefits:</b>
                        </p>
                        <ul className="list-disc ml-8">
                            <li><b>Strengthens Gut Health:</b> Polyphenols and natural fiber nourish gut bacteria and support digestion.</li>
                            <li><b>Supports Heart Health:</b> Rare Omega-7 helps maintain healthy cholesterol and artery flexibility.</li>
                            <li><b>Boosts Immunity & Energy:</b> Superoxide Dismutase (SOD) fights fatigue and boosts immunity.</li>
                        </ul>

                        <p className="mt-4">Stay healthy and energized with Nutriorg Sea Buckthorn Juice Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, nihil maxime magnam vero repudiandae dolores vitae ad ratione itaque adipisci, deleniti, autem tempore ab nulla iure debitis aliquid iste officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consectetur cupiditate veniam debitis enim. Minima dolor doloremque minus, officia nam explicabo 
                            incidunt nulla iusto ipsam totam suscipit at facere voluptate. — perfect for a robust immune system and glowing skin!</p>
                    </div>
                </div>


            </div>
            {/* CUSTOMER REVIEWS */}
            <div>
                <CustomerReview />
            </div>

        </div>
    );
};

export default ProductPage;