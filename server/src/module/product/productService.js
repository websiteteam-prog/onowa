import Product from "../../models/productModel.js";

export const addProductService = async (data) => {
    const existProduct = await Product.findOne({
        where: { title: data.title }
    });

    if (existProduct) {
        throw new Error("Product already exists with this title");
    }

    const product = await Product.create(data);
    return product;
};

// GET SINGLE
export const getProductService = async (id) => {
    const product = await Product.findByPk(id);

    if (!product) {
        throw new Error("Product not found");
    }

    return product;
};

// GET ALL
export const getAllProductService = async () => {
    return await Product.findAll({
        order: [["created_at", "DESC"]]
    });
};

// UPDATE
export const updateProductService = async (id, data) => {
    const product = await Product.findByPk(id);

    if (!product) {
        throw new Error("Product not found");
    }

    await product.update(data);

    return product;
};

// DELETE
export const deleteProductService = async (id) => {
    const product = await Product.findByPk(id);

    if (!product) {
        throw new Error("Product not found");
    }

    await product.destroy();

    return true;
};