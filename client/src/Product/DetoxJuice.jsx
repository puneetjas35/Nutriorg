import React, { useEffect, useState } from "react";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import { DisplayPriceInRupees } from "../utils/DisplayPriceInRupees";
import AddToCartButton from "../AddToCartButton";
import Loading from "../Loading";
import { useParams } from "react-router-dom";

const DetoxJuicePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  // console.log("CATEGORY FROM URL:", category);

  const categoryConfig = {
  "detox-juice": {
    title: "Detox Juice",
    description: "Revitalize your body naturally, flush out toxins, and feel refreshed with our range of all-natural detox juices. A healthier you starts here.",
    banner: "https://nutriorg.com/cdn/shop/files/Detox_Juices_8f2a19d8-739c-412e-9975-a048a2cad7cb_1512x.jpg?v=1725004297"
  },
  "skin-hair": {
    title: "Skin & Hair",
    description: "Give your skin the treatment it deserves by shopping for the best skin care products in the market with Nutriorg along with our hair products range. Explore & Shop Now!",
    banner: "https://nutriorg.com/cdn/shop/files/skin_care_collection_banner_copy_4100x.jpg?v=1725447131"
  },
  "healthy-breakfast": {
    title: "Healthy Breakfast",
    description: "Start your day with A Healthy Morning Breakfast with our range of Oats, Muesli, Granola, etc. Make sure your body gets amp energy for a productive day.",
    banner: "https://as2.ftcdn.net/v2/jpg/05/83/42/21/1000_F_583422139_D7p5UxsmLvpP7zHiJvWJSNbOjGuUFkc3.jpg"
  },
  "healthy-powder": {
    title : "Organic Superfood",
    description : "The superfood powder range is a powerhouse of numerous nutrients that are incredibly healthy for the body in various aspects. These Superfoods are not only superfoods but certified organic, with a higher nutrition profile. They are a perfect ingredient to make nutritious superfood smoothies",
    banner : "https://img.freepik.com/premium-vector/healthy-food-border-banner-with-grocery-edge-horizontal-pattern-with-fresh-organic-fruits-vegetables-seafood-vitamin-foodstuff-colored-flat-vector-illustration-isolated-white-background_198278-21118.jpg?w=2000"
   },
   "cold-pressed-oils":{
    title : "Cold Pressed Oils",
    description : "Experience the authentic taste and health benefits of our wooden cold-pressed oils.  Traditionally crafted to retain all the natural goodness, our oils are just perfect for elevating your cooking to a whole new level.",
    banner : "https://nutriorg.com/cdn/shop/files/Oils_7b9d80b2-0c55-4f4a-bd61-7e85a54ffc52_1512x.jpg?v=1725882419" 
   },
   "salt-sweetener": {
    title : "Salt and Sweetener",
    description : "Enhance the taste of your food the organic way with Nutriorg Salt & Sweeteners. Now experience what organic food truly tastes like at your home today!",
    banner : "https://tse3.mm.bing.net/th/id/OIP.TKYSN4tU7S4RN7bFBZhTCwHaEK?pid=Api&P=0&h=180"
   },
   "desi-cow-ghee" : {
    title : "Desi Cow Ghee",
    description : "Indulge in the rich, nutty taste of our premium ghee. Handcrafted with great care, it brings class to each meal and infuses warmth and tradition into your kitchen",
    banner : "https://nutriorg.com/cdn/shop/files/Ghee_07f8d9a8-67a9-4bf1-8655-b82848f654b9_1512x.jpg?v=1725882419"
   },
   "immunity-booster": {
    title : "Immunity Booster",
    description : "Fortify your immunity and strengthen your body’s defence with our potent immunity boosters. Stay resilient, stay healthy. Explore the collection now.",
    banner : "https://nutriorg.com/cdn/shop/files/Immunity_Boosters_1512x.jpg?v=1725004297"
   }
};

  const fetchProducts = async () => {
    try {
      // console.log("CATEGORY FROM URL:", category);
      const response = await Axios({
        ...SummaryApi.getProductByCategory(category)

      });

      // console.log("API RESPONSE:", response.data);

      if (response.data.success) {

        setProducts(response.data.data);
      }
    } catch (error) {
      console.log("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (category) {
      fetchProducts();
    }
  }, [category]);

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  if (loading) return <Loading />;

   const config = categoryConfig[category] || {};

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-6">

        {/* 🔹 Heading */}
       

        <h1 className="text-2xl font-bold mb-2">{config.title}</h1>
        <p className="text-gray-600 mb-4">
          {config.description}
        </p>

        {/* 🔹 Banner */}
        <div className="w-full mb-6">
          <img
            src={config.banner} // replace with your image
            alt={config.title}
            className="w-full rounded-lg h-60  object-cover"
          />
        </div>

        {/* 🔹 Filters Row (optional like site) */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-gray-500">Availability: All</p>
          <p className="text-sm text-gray-500">Sort by: Featured</p>
        </div>

        {/* 🔹 Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-sm h-full flex flex-col p-4 hover:shadow-md transition"
            >
              {/* Image */}
              <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full object-contain"
                />
              </div>

              {/* Name */}
              <h3 className="mt-3 font-medium text-gray-800 line-clamp-2 min-h-[48px]">
                {product.title}
              </h3>

              {/* Price */}
              <div className="mt-2 flex items-center gap-2">
                {product.oldPrice && (
                  <span className="line-through text-gray-400 text-sm">
                    {DisplayPriceInRupees(product.oldPrice)}
                  </span>
                )}
                <span className="text-green-700 font-semibold">
                  {DisplayPriceInRupees(product.price)}
                </span>
              </div>

              {/* Button */}
              <div className="bg-[#89c21e] text-center rounded mt-3">
                <AddToCartButton data={product}
                   />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetoxJuicePage;