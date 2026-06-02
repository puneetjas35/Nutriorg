import React, { useEffect, useState } from "react";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import toast from "react-hot-toast";
import { useGlobalContext } from "../provider/GlobalProvider";
import CustomerReview from './CustomerReview'
import AddToCartButton from "../AddToCartButton";
import { useParams } from "react-router-dom"

const Seabuckthorn = () => {

  const { fetchCartItem } = useGlobalContext()

  const [data, setData] = useState(null)
  const [selectedVariant, setSelectedVariant] = useState(null)
  const [loading, setLoading] = useState(false)

  // get slug from url
  const { slug } = useParams()

  // fetch product
  const fetchProduct = async () => {
    
    try {
     
      
      setLoading(true)

      const response = await Axios.get(`/api/product/${slug}`)
      console.log("API RESPONSE:", response.data)
      //({  ...SummaryApi.getProduct
      // })
      const product = response?.data
      // const product = response?.data?.data || []

      // const product = products.find((item) => item.slug === slug)

      if (product?.variants?.length > 0) {

        const sortedVariants = [...product.variants].sort(
          (a, b) => b.price - a.price
        )

        setData({ ...product, variants: sortedVariants })
        setSelectedVariant(sortedVariants[0])

      } else {
        setData(product)
      }

      setLoading(false)

    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
     
    if(slug){
    fetchProduct()
  }
  }, [slug])

  // change variant
  const handleVariantChange = (variant) => {
    setSelectedVariant(variant)
  }

  // add to cart
  // const handleAddToCart = async () => {
  //   try {

  //     const response = await Axios({
  //       ...SummaryApi.addToCart,
  //       data: {
  //         productId: data?._id,
  //         variantId: selectedVariant?._id,
  //         quantity: 1
  //       }
  //     })

  //     if (response?.data?.success) {
  //       toast.success("Product added to cart")
  //       fetchCartItem()
  //     }

  //   } catch (error) {
  //     console.log(error)
  //     toast.error("Failed to add to cart")
  //   }
  // }

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>
  }

  if (!data) {
    return <p className="text-center mt-10">Product not found</p>
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">

      {/* PRODUCT IMAGE */}
      <div>
        <img
          src={selectedVariant?.image || data?.image}
          alt={data?.title}
          className="w-full rounded-lg"
        />
      </div>

      {/* PRODUCT DETAILS */}
      <div>

        <h1 className="text-2xl font-bold mb-2">
          {data?.title}
        </h1>

        <div className="flex items-center gap-4 mb-4">

          <span className="text-2xl font-semibold text-green-600">
            ₹{selectedVariant?.price || data?.price}
          </span>

          <span className="line-through text-gray-400">
            ₹{selectedVariant?.oldPrice || data?.mrp}
          </span>

        </div>

        {/* VARIANTS */}

        {data?.variants?.length > 0 && (

          <div className="mb-6">

            <p className="font-semibold mb-2">
              Select Size
            </p>

            <div className="flex gap-3">

              {data?.variants?.map((variant) => (
                <button
                  key={variant._id}
                  onClick={() => handleVariantChange(variant)}
                  className={`border px-4 py-2 rounded-md
                  ${selectedVariant?._id === variant._id
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

        {/* <button
          onClick={handleAddToCart}
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
        >
          Add To Cart
        </button> */}

      <div className="bg-[rgb(92,128,24)] text-center">

        <AddToCartButton
          data={data}
          selectedVariant={selectedVariant}
        />
        </div>






        {/* PRODUCT DESCRIPTION SECTION */}
        <div className="product-description leading-7 mt-20">
          <p ><strong className="font-extrabold">M.R.P. (250ml) : ₹369</strong></p>
          <p><strong className="font-extrabold">500ml : ₹615</strong></p>
          <p><strong className="font-extrabold">500ml*2 : ₹1230</strong></p>
          <p><strong className="text-[0.875rem]">(Inclusive of all Taxes)</strong></p>
          <p>Nutriorg Sea Buckthorn juice is a 99.98% pure pulp concentrate, rich in Vitamin C, Omegas 3, 6, 9, and rare Omega 7, along with 190+ bioactive nutrients. It supports gut health, liver function, immunity, and overall energy.</p>
          <p className="my-3">
            <b><span>Key Benefits:  <br /></span></b>
          </p>
          <ul className="list-disc ml-8">
            <li>
              <b><span>Strengthens Gut Health: </span></b>
              <span>Polyphenols and natural fiber in Sea Buckthorn Juice nourish good gut bacteria, strengthen the gut lining, and support smooth, science-backed digestion.</span>
            </li>
            <li>
              <b><span>Supports Heart Health: </span></b>
              <span>Rare Omega-7 fatty acids in Sea Buckthorn Juice help maintain healthy cholesterol, support artery flexibility, and promote better heart function.</span>
            </li>
            <li>
              <b><span>Improves Lung health: </span></b>
              <span>With 10× more antioxidants than blueberries, Sea Buckthorn Juice helps fight oxidative stress and supports stronger, healthier lungs naturally.</span>
            </li>
            <li>
              <b><span>Promotes Skin Glow: </span></b>
              <span>With 35× more Vitamin C and 3× more Vitamin E than oranges, Sea Buckthorn Juice supports collagen, hydration, and a naturally radiant, healthy glow.</span>
            </li>
            <li>
              <b><span>Boosts Immunity & Energy: </span></b>
              <span>Powered by Superoxide Dismutase (SOD), Sea Buckthorn Juice boosts immunity, fights fatigue, and keeps you energised with science-backed cell protection.</span>
            </li>
          </ul>
          <br />
          <div className="space-y-4">
            <p>Nutriorg Seabuckthorn Juice also aids in repairing cell damage, improving memory, and fighting inflammation. This detox juice is perfect for anyone looking to boost their overall health and well-being.</p>

            <p>
              <b><span>New Travel-Friendly Size:</span></b>
              <span> Now available in a convenient 250ml bottle, Nutriorg Seabuckthorn Juice is easy to carry and perfect for on-the-go use. Whether you're traveling, at work, or out and about, you can easily take it with you, pull it out from your bag, and enjoy its health benefits wherever you are.</span>
            </p>
            <p>
              <b><span>How to Use:  </span></b>
              <span>Mix 10 mL of the juice with 100mL of lukewarm water in a non-metallic glass/pot. For best results, consume it twice a day on an empty stomach.</span>
              <br />
            </p>
            <p>
              <span>500ml bottle = 50 glasses! <br /></span>
            </p>
            <p>
              <span>Stay healthy and energized with Nutriorg Seabuckthorn Juice - your go-to solution for a robust immune system and glowing skin, now in a travel-friendly size!</span>
              <br /><br />
            </p>
          </div>
          <div className="w-full">
            <h2 className="mb-4 text-lg">
              Why Choose Nutriorg Seabuckthorn Juice?
            </h2>

            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="w-1/3 align-top border-r border-gray-300 p-2 font-medium">
                    99.98% Pure Juice Pulp
                  </td>
                  <td className="py-2 px-4">
                    Made with nearly pure juice pulp, ensuring maximum potency and no added fillers or preservatives.
                  </td>
                </tr>

                <tr className="border-b border-gray-300">
                  <td className="w-1/3 p-2 font-medium  border-r border-gray-300">
                    Washed Through 5 Steps To Remove Impurities
                  </td>
                  <td className="py-2 px-4">
                    The fruit is washed in 5 steps: normal water, IPA water, twice with RO water, and finally DM water.
                  </td>
                </tr>

                <tr className="border-b border-gray-300">
                  <td className="w-1/3 p-2 font-medium  border-r border-gray-300">
                    100ml of This Juice = 47 Apples’ Worth of Antioxidants
                  </td>
                  <td className="py-2 px-4 align-top">
                    Packed with antioxidants, 100ml delivers the same benefits as 47 apples.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>



        </div>



      </div>
      <div>
        <CustomerReview />
      </div>

    </div>


  )
}

export default Seabuckthorn;
