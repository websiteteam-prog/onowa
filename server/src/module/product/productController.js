import {
    addProductService,
    getProductService,
    getAllProductService,
    updateProductService,
    deleteProductService
} from "./productService.js";
import { productSchema } from "./productValidation.js"

export const addProductController = async (req, res) => {
    try {

        // Zod validation
        const validatedData = productSchema.parse({
            ...req.body,
            image: req.file ? `/uploads/${req.file.filename}` : req.body.image
        });

        // service call
        const product = await addProductService(validatedData);

        res.status(201).json({
            success: true,
            message: "Product added successfully",
            data: product
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Add product failed",
            error: error.message
        });
    }
};

export const getProductController = async (req, res) => {
    try {

        const product = await getProductService(req.params.id);

        res.status(200).json({
            success: true,
            data: product
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Get product failed",
            error: error.message
        });
    }
};

export const getAllProductController = async (req, res) => {
    try {

        const products = await getAllProductService();

        res.status(200).json({
            success: true,
            data: products
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Get all products failed",
            error: error.message
        });
    }
};

export const updateProductController = async (req, res) => {
    try {

        const product = await updateProductService(req.params.id, req.body);

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: product
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Update product failed",
            error: error.message
        });
    }
};

export const deleteProductController = async (req, res) => {
    try {

        await deleteProductService(req.params.id);

        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Delete product failed",
            error: error.message
        });
    }
};