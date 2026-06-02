import mongoose from "mongoose";

const cartProductSchema = new mongoose.Schema({
  productId: {
    type:  mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required : true
  },
  quantity : {
    type : Number,
    default : 1, 
    
  },   
  userId : {
    type : mongoose.Schema.ObjectId,
    ref : "User",
    required : true
  },
   variantId: {
    type: mongoose.Schema.Types.ObjectId,
    // ref : "productVariant",
    default : null
  },
  
}, {
  timestamps : true
});

export default mongoose.model("cartProduct", cartProductSchema);
