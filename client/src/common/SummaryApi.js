export const baseURL = import.meta.env.VITE_API_URL;

const SummaryApi = {
    register : {
        url : '/api/user/register',
        method : 'post'
    },
    login : {
        url : '/api/user/login',
        method : 'post'
    }, 
    forgot_password : {
        url : '/api/user/forgot-password',
        method : 'put'
    }, 
    forgot_password_otp_verification : {
        url : "/api/user/verify-forgot-password-otp",
        method : "put"
    },
    resetPassword : {
        url : "/api/user/reset-password",
        method : "put"
    }, 
    refreshToken : {  
        url : '/api/user/refresh-token',
        method : 'post'
    }, 
    userDetails : {
        url : "/api/user/user-details",
        method : "get"
    }, 
    logout : {
        url : "/api/user/logout",
        method : "get"
    },
    uploadAvatar : {
        url : "/api/user/upload-avatar",
        method : "put"
    },
    updateUserDetails : {
        url : "/api/user/update-user",
        method : "put"
    },
    addToCart : {
        url : "/api/cart/create",
        method : "post"
    }, 
    getCartItem : {
        url : "/api/cart/get",
        method : "get"
    },
    getProduct :(section)=> ({
    // url : "/api/product/get",
    // method : "get"
     url: `/api/product/get?section=${section}`,
    method: "get"
}),
 getProductByCategory: (category) => ({
  url: `/api/product/get?category=${category}`,
  method: "get"
}),
  updateCartItemQty : {
    url : "/api/cart/update-qty",
    method : "put"
  }, 
  deleteCartItem : {
    url : '/api/cart/delete-cart-item',
    method : "delete"
  },
  createAddress : {
    url : "/api/address/create",
    method : "post"
  },
  getAddress : {
    url : "/api/address/get",
    method : "get"
  },
  updateAddress : {
    url : "/api/address/update",
    method : "put"
  },
  disableAddress : {
    url : "/api/address/disable",
    method : "delete"
  },
  CashOnDeliveryOrder : {
    url : "/api/order/cash-on-delivery",
    method : "post"
  },
  payment_url : {
    url : "/api/order/checkout",
    method : "post"
  },
  getOrderItems : {
    url : "/api/order/order-list",
    method : "get"
  }

}

export default SummaryApi
