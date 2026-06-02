import ProductModel from "../models/product.model.js";

/**
 * CREATE PRODUCT (TEMP – no auth)
 */
export const createProductController = async (req, res) => {
  try {
    const product = new ProductModel(req.body);
    const saved = await product.save();

    res.status(201).json({
      success: true,
      message: "Product created",
      data: saved,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * GET ALL PRODUCTS (POST)
 */
export const getProductController = async (req, res) => {
  try {
    // const { section } = req.query;
    // console.log("SECTION FROM QUERY:", section);
    //   let query = {};

    // if (section) {
    //   query.section = section;
    // }

    // const products = await ProductModel.find(query).sort({ createdAt: -1 });

    // console.log("FINAL QUERY:", query);
     const type = req.query.type;
    const section = req.query.section?.trim().toLowerCase();
    const category = req.query.category?.trim().toLowerCase();
    const search = req.query.search?.trim();

    let query = {};
     
     if (type === "search") {
      if (!search || search.length < 2) {
        return res.status(200).json({
          success: true,
          data: [],
        });
      }

      query = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { category: { $regex: search, $options: "i" } },
          { section: { $regex: search, $options: "i" } }
        ]
      };
    }

     else if (section) {
      query = {
        section: { $regex: `^${section}$`, $options: "i" }
      };
    } 
    else if (category) {
      query = {
        category: { $regex: `^${category}$`, $options: "i" }
      };
    }
    const products = await ProductModel.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: products,
    });
  }
  catch (error) {
    console.log("❌ PRODUCT ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getSingleProductController = async (req, res) => {
  try {
    const { slug } = req.params;




    const product = await ProductModel.findOne({ slug });

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({
      success: true,
      data: product
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};