import mongoose from "mongoose";

const variantSchema = new mongoose.Schema({
  label: { type: String, required: true },
  price: { type: Number, required: true },
  oldPrice: { type: Number },
  image: { type: String, required: true }
});

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    mrp: {
      type: Number,
      default: 0,
    },

    discount: {
      type: Number,
      default: 0,
    },

    saved: {
      type: Number,
      default: 0,
    },
    section: {
      type: String,
      enum: ["skin-hair", "detox", "cold-pressed"],
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    category: {
      type : String,
      unique : true,
      lowercase : true
    },

    image: {
      type: String,
      required: true,
    },
    

    hoverImage: {
      type: String,
    },

    inStock: {
      type: Boolean,
      default: true,
    },
    variants: [variantSchema]
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;