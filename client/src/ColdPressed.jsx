import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"
import Axios from "./utils/Axios";
import AddToCartButton from "./AddToCartButton";


/* ------------------ PRODUCT CARD ------------------ */
const ProductCard = ({ item }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    item.variants ? item.variants[0] : null
  );

  return (
    <div className="flex-[0_0_25%] px-2 box-border">
      <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-[420px]">

        <Link to={`/product/${item.slug}`}>
        {/* IMAGE */}
        <div className="relative h-[240px] flex items-center justify-center p-4">
          {item.sale && (
            <span className="absolute top-3 left-3 z-20 bg-[#7ba428] text-white text-[10px] px-2 py-[3px] rounded-full">
              Sale
            </span>
          )}

          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-0"
          />
          {item.hoverImage && (
            <img
              src={item.hoverImage}
              alt=""
              className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
        </div>
        </Link>

        {/* CONTENT */}
        <div className="px-3 flex-1 flex flex-col justify-between mt-4">
          <div className="flex gap-2">

            {/* NAME  */}
            <div className="w-[55%]">
              <p className="text-[14px] text-[#2d2d2d] leading-[1.45] text-start font-normal tracking-[0.02em] line-clamp-2 font-monteserrat">
                {item.title}
              </p>


            </div>
            

            {/* PRICE */}
            <div className="w-[45%] text-right">
              <p className="font-semibold text-[12px]">
                ₹{Number(selectedVariant?.price || item.price).toFixed(2)}
              </p>

              {(selectedVariant?.mrp || item.mrp) && (
                <div className="text-[11px]">
                  <span className="line-through text-gray-400">
                    ₹{Number(selectedVariant?.mrp || item.mrp).toFixed(2)}
                  </span>
                  {item.discount && (
                    <span className="ml-1 border border-green-700 text-green-700 px-1 rounded">
                      {item.discount}% OFF
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* YOU SAVE */}
          <div className="h-[16px] text-right text-green-600 text-[10px] mb-1">
            {(selectedVariant?.saved || item.saved) &&
              `You Save ₹${selectedVariant?.saved || item.saved}`}
          </div>
        </div>

        {item.variants && (
          <div className="m-3">
            <select
              className="w-full px-[5px] py-[5px] text-xs border-0 rounded-[4px] bg-[#f3f3f5] cursor-pointer"

              value={selectedVariant?.label}
              onChange={(e) =>
                setSelectedVariant(
                  item.variants.find(v => v.label === e.target.value)
                )
              }
            >
              {item.variants.map((variant, i) => (
                <option key={i} value={variant.label}>
                  {variant.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* <button className="mx-3 mb-3 bg-[#7ba428] text-white py-2 rounded">
          Add to Cart
        </button> */}
        <div className="bg-[rgb(92,128,24)] text-center">
          <AddToCartButton data={item} selectedVariant={selectedVariant} />
        </div>
      </div>
    </div>
  );
};

/* ------------------ MAIN COMPONENT ------------------ */
const ColdPressed = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await Axios.get("/api/product/get?section=cold-pressed-oils");

      const data = res?.data?.data || res?.data;
      setProducts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 3
  });

  return (
    <section className="ColdPress bg-[rgb(244,242,233)] pb-8">

      {/* HEADING */}
      <div className="heading m-6 flex items-center justify-between leading-[1.4em]">
        <h2 className="text-[24px] ml-7 mt-6 font-semibold uppercase tracking-normal text-[#9A8F96] hover:text-[#6a5b5c] transition-colors duration-300">
          <span className="font-['Montserrat',sans-serif]">Cold-Pressed Oils</span>
        </h2>
      </div>

      {/* SLIDER */}
      <div className="relative">

        {/* LEFT ARROW */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 text-[#6a5b5c]"
        >
          <ChevronLeft size={36} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 text-[#6a5b5c]"
        >
          <ChevronRight size={36} />
        </button>

        {/* VIEWPORT */}
        <div className="max-w-[1280px] mx-auto px-6">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {products.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColdPressed;