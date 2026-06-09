import React, { useEffect, useState, useRef } from 'react'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoChevronDownSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import UserMenu from './UserMenu';
import { useLocation } from "react-router-dom"
import { DisplayPriceInRupees } from './utils/DisplayPriceInRupees';
import { useGlobalContext } from './provider/GlobalProvider';
import Axios from "./utils/Axios"
import { Menu, X } from "lucide-react";
import DisplayCartItem from './DisplayCartItem';

// import { set } from 'mongoose';


const Navbar = ({ searchRef }) => {

  const [openUserMenu, setOpenUserMenu] = useState(false)
  const cartItem = useSelector(state => state.cartItem.cart)
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [mobileMenu, setMobileMenu] = useState(false);

  const { totalPrice, totalQty } = useGlobalContext()
  const [openCartSection, setOpenCartSection] = useState(false)
  


  const navigate = useNavigate();
  const user = useSelector((state) => state?.user)

  // const SearchBar = ({ setResults }) => {
  //   const [query, setQuery] = useState("");
  //   const [results, setResults] = useState([]);


  //   useEffect(() => {
  //     const delay = setTimeout(() => {
  //       handleSearch(query);
  //     }, 400);

  //     return () => clearTimeout(delay);
  //   }, [query]);

  //   const handleSearch = async (value) => {
  //     setQuery(value);

  //     if (!value) {
  //       setResults([]);
  //       return;
  //     }

  //     try {
  //       const res = await Axios.get(`/api/product?search=${value}`);
  //       setResults(res.data.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  // }
  useEffect(() => {
    const delay = setTimeout(() => {
      if (!query || query.trim().length < 2) {
        setQuery("");
        setResults([]);

        return;
      }

      const fetchSearch = async () => {
        try {
          const res = await Axios.get(`/api/product/get?search=${query}&type=search`);
          setResults(res.data.data);
        } catch (err) {
          console.error(err);
        }
      };

      fetchSearch();
    }, 400);

    return () => clearTimeout(delay);
  }, [query]);

  useEffect(() => {
    const handler = () => setResults([]);
    window.addEventListener("click", handler);

    return () => window.removeEventListener("click", handler);
  }, []);

  const location = useLocation()

  useEffect(() => {
    setOpenUserMenu(false)
  }, [location])


  // //total item and total price
  // useEffect(()=>{

  //   const qty = cartItem.reduce((preve,curr)=>{
  //     return preve + curr.quantity
  //   },0)
  //   setTotalQty(qty)

  //  const tPrice = cartItem.reduce((prev, curr) => {
  //   const price = curr.variantId?.price || curr.productId?.price || 0
  //   return prev + price * curr.quantity
  // }, 0)
  //   setTotalPrice(tPrice)



  // },[cartItem])


  return (

    <div className='w-full'>
      {/* Top green shipping bar */}
      <div className="bg-[#5c8018] py-2 px-3 flex items-center justify-center gap-[0.3em]">
        <p className="text-white text-sm">
          Free Shipping on Orders Above <span className="font-semibold">₹750</span>
        </p>

        <button className="rounded-md bg-white text-[#5c8018] text-xs font-semibold px-[9px] py-[4px] whitespace-nowrap">
          Shop Now
        </button>
      </div>

      {/* Main navbar */}
      <div className="bg-[#174733] text-white w-full py-3 md:py-4">
        <div className="flex items-center justify-between w-full px-3 md:px-6 lg:px-8 py-2 relative">

          {/* Search */}
          <div className="hidden md:flex relative items-center space-x-0 ml-[0.3em]">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-[140px] sm:w-[180px] md:w-[255px] h-[40px] md:h-[45px] rounded-l-md px-2 focus:outline-none text-black"
            />
            
            <button className="h-[45px] w-[45px] bg-[#89c21e] flex items-center justify-center rounded-r-md cursor-pointer">
              <HiMiniMagnifyingGlass className="h-6 w-6 text-white" />
            </button>
            {results.length > 0 && (
              <div className="absolute top-full left-0 bg-white text-black w-full min-w-[180px] max-h-60 overflow-y-auto shadow-lg rounded-md mt-1 z-50">
                {results.map((item) => (
                  <Link
                    key={item._id}
                    to={`/product/${item.slug}`}
                    className="block px-3 py-2 hover:bg-gray-100 text-sm font-semibold"
                    onClick={() => {
                      setResults([])
                      setQuery("")
                    }}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <img
              src="https://nutriorg.com/cdn/shop/files/Capture2_270x.png?v=1646817909"
              alt="Nutriorg Logo"
              className="h-[45px] w-auto sm:h-[55px] md:h-[67px] text-left"
            />
          </div>

          {/* User & Cart icons */}
          <div className="flex items-center space-x-2 text-white text-2xl cursor-pointer">
            <button
               className="md:hidden"
               onClick={() => setMobileMenu(!mobileMenu)}
            >
             {mobileMenu ? <X size={24} /> : <Menu size={24} />}
           </button>

            {
              user?._id ? (
                <div className='relative'>
                  <div onClick={() => setOpenUserMenu(preve => !preve)} className="flex select-none items-center cursor-pointer">
                    <p className='hidden md:block text-[16px]'>Account</p>
                    {
                      openUserMenu ? (
                        <GoTriangleUp size={20} />
                      ) : (
                        <GoTriangleDown size={20} />
                      )
                    }

                  </div>
                  {
                    openUserMenu && (
                      <div className='absolute  right-0 top-8 z-50'>
                        <div className='bg-white rounded p-2 min-w-40 shadow-lg'>
                          <UserMenu close={() => setOpenUserMenu(false)} />
                        </div>

                      </div>
                    )
                  }

                </div>
              ) : (
                <FiUser
                  className="hover:text-[#89c21e] cursor-pointer"
                  onClick={() => navigate("/login")}
                />
              )
            }
            <div className='carticon border bg-[#5c8018] p-1 md:p-2 rounded-lg' onClick={() => setOpenCartSection(true)}>
              {
                cartItem[0] ? (
                  <div className='leading-3'>
                    <div className='flex items-center gap-1'>
                      <span><MdOutlineShoppingCart className="hover:text-[#89c21e]" /></span><p className='text-[12px]'>{totalQty} Items</p>
                    </div>

                    <p className='hidden md:block text-[12px]'>{DisplayPriceInRupees(totalPrice)}</p>
                  </div>
                ) : (
                  <MdOutlineShoppingCart className="hover:text-[#89c21e]" />
                )
              }

            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
{mobileMenu && (
  <div className="md:hidden bg-white shadow-lg">

    {/* Mobile Search */}
    <div className="p-3 border-b">
      <div className="flex">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border rounded-l-md p-2 text-black"
        />
        <button className="bg-[#89c21e] px-3 rounded-r-md">
          <HiMiniMagnifyingGlass className="text-white" />
        </button>
      </div>
    </div>

    <ul className="flex flex-col text-black">

        <li className="p-3 border-b">
          <Link
            to="/"
            onClick={() => setMobileMenu(false)}
          >
            Home
          </Link>
        </li>

        <li className="p-3 border-b">
          <Link
            to="/category/detox-juice"
            onClick={() => setMobileMenu(false)}
          >
            Detox Juice
          </Link>
        </li>

        <li className="p-3 border-b">
          <Link
            to="/category/skin-hair"
            onClick={() => setMobileMenu(false)}
          >
            Skin & Hair Care
          </Link>
        </li>

        <li className="p-3 border-b">
          <Link
            to="/homeblog"
            onClick={() => setMobileMenu(false)}
          >
            Blogs
          </Link>
        </li>

        <li className="p-3 border-b">
          <Link
            to="/about"
            onClick={() => setMobileMenu(false)}
          >
            About Us
          </Link>
        </li>

      </ul>
    </div>
  )
}


      {/*Navbar list*/}
      <div className='relative  overflow-visible z-50 mt-3 cursor-pointer font-arimo'>
        <ul className='hidden md:flex items-center justify-center gap-4 xl:gap-7'>
          <li><Link to="/">Home</Link></li>
          <li className="group flex items-center justify-center">
            Shop
            <IoChevronDownSharp className="ml-1 mt-1" />

            {/* Mega Dropdown */}
            <div
              className="absolute  top-full z-50
                   -translate-x-1  mt-2
                bg-white border border-gray-200 rounded-md shadow-lg
                 opacity-0 invisible transition-all duration-200
                group-hover:opacity-100 group-hover:visible"
            >
              <div className="mx-auto px-8 py-6">

                {/* GRID */}
                <div className="gap-x-8 gap-y-4 text-[14px] font-arimo text-start">

                  {/* ROW 1 */}
                  <div>
                    <h4 className="mb-2 font-semibold text-[1.1em] text-black">Solution</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li> <Link
                        to="/category/detox-juice"
                        className="block rounded-md transition-all duration-200 hover:bg-gray-100 hover:text-[#5c8018]"
                        >Detox Juice</Link>
                      </li>
                       <li> <Link
                        to="/category/skin-hair"
                        className="block rounded-md transition-all duration-200 hover:bg-gray-100 hover:text-[#5c8018]"
                        >Skin & Hair-Care</Link>
                      </li>
                         <li> <Link
                        to="/category/cold-pressed-oils"
                        className="block rounded-md transition-all duration-200 hover:bg-gray-100 hover:text-[#5c8018]"
                        >Cold Pressed Oils</Link>
                      </li>
                        <li> <Link
                        to="/category/healthy-powder"
                        className="block rounded-md transition-all duration-200 hover:bg-gray-100 hover:text-[#5c8018]"
                        >Healthy Powder</Link>
                      </li>
                      <li> <Link
                        to="/category/healthy-breakfast"
                        className="block rounded-md transition-all duration-200 hover:bg-gray-100 hover:text-[#5c8018]"
                        >Healthy Breakfast</Link>
                      </li>
                    </ul>
                  </div>

                  {/* <div>
                    <h4 className="mb-2 font-semibold text-[1.1em] text-black">Healthy Drinks</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>Detox Juices</li>
                      <li>Detox Juices - 250ml</li>
                      <li>Immunity Boosters</li>
                      <li>Health Care Juices</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold text-[1.1em] text-black">Healthy Breakfast</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>Oats</li>
                      <li>Quinoa</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold text-[1.1em] text-black">Salt & Sweeteners</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>Salt</li>
                      <li>Honey</li>
                      <li>Jaggery</li>
                      <li>Stevia</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold text-[1.1em] text-black">Skin & Hair Care</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>Skin Care</li>
                      <li>Hair Care</li>
                    </ul>
                  </div> */}

                  {/* ROW 2 */}
                  {/* <div>
                    <h4 className="mb-2 font-semibold text-[1.1em] text-black">Healthy <br /> Confectionery</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>Candies</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold text-[1.1em] text-black">Cooking Essentials</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>Wooden Cold Pressed Oils</li>
                      <li>Ghee</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold text-[1.1em] text-black">
                      Health & Dietary Supplements
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>Healthy Powders</li>
                    </ul>
                  </div> */}

                  {/* <div>
                    <h4 className="mb-2 font-semibold text-[1.1em] text-black">Nutraceuticals</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>Nutraceutical Supplement</li>
                    </ul>
                  </div> */}

                  <div /> {/* empty cell for alignment */}

                </div>
              </div>
            </div>
          </li>

          <li><Link to="/newsmedia">News & Media</Link></li>
          <li className="relative inline-block group  cursor-pointer">
            <div className="flex items-center">
              Our Company
              <IoChevronDownSharp className="ml-1 mt-[2px]" />
            </div>        <ul
              className="absolute top-full left-1/2 z-50 mt-2 text-start w-[280px] -translate-x-1/2 rounded-md bg-white text-black shadow-[0_8px_30px_rgba(0,0,0,0.12)] opacity-0 invisible transition-all duration-200
               group-hover:opacity-100 group-hover:visible"
            >
              <li className="px-6 py-1 text-[14px] hover:bg-gray-100"><Link to="/about">About Us</Link></li>
              <li className="px-6 py-1 text-[14px] hover:bg-gray-100"><Link to="/ourstory">Brand Story</Link></li>
              <li className="px-6 py-1 text-[14px] hover:bg-gray-100"><Link to="/founder">Founder's Note</Link></li>
              <li className="px-6 py-1 text-[14px] hover:bg-gray-100"><Link to="/ourvalues">Our Values</Link></li>
              <li className="px-6 py-1 text-[14px] hover:bg-gray-100"><Link to="/sustainable">Sustainable Planet</Link></li>
              <li className="px-6 py-1 text-[14px] hover:bg-gray-100"><Link to="/ourcontributions">Our Contributions</Link></li>
              <li className="px-6 py-1 text-[14px] hover:bg-gray-100"><Link to="/ourcertifications">Our Certifications</Link></li>
            </ul>


          </li>


          
          <li><Link to="/homeblog">Blogs</Link></li>
        </ul>
      </div>
      {
        openCartSection && (
          <DisplayCartItem close={() => setOpenCartSection(false)} />
        )
      }
    </div>
  );
};

export default Navbar;
