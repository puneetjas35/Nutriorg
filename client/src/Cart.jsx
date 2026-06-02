// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCart = async () => {


//       try {
//         const res = await fetch(
//           "http://localhost:8000/api/cart",
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               // Authorization: `Bearer ${token}`,
//             },
//             credentials: "include",
//           }
//         );


//         if (res.status === 401) {
//           navigate("/login");
//           return;
//         }

//         const data = await res.json();
//         console.log("CART RESPONSE:", data);



//         setCartItems(data.items || []);
//       } catch (err) {
//         console.error("Cart fetch failed", err);
//         navigate("/login")
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCart();
//   }, []);

//   if (loading) {
//     return <h2 className="text-center mt-20">Loading cart...</h2>;
//   }

//   if (cartItems.length === 0) {
//     return <h2 className="text-center mt-20">Your cart is empty 🛒</h2>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto mt-20 mb-40">
//       <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

//       {cartItems.map((item, index) => (
//         <div
//           key={index}
//           className="border p-4 mb-4 flex justify-between items-center"
//         >
//           <div>
//             <h3 className="font-semibold">{item.name}</h3>
            
//             <p>Qty: {item.qty}</p>
//           </div>

//           <p className="font-bold">₹{item.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;
