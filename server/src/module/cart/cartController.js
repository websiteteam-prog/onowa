import {
    addToCartService,
    getCartService,
    removeCartService,
    updateCartService
} from "./cartService.js";


export const addToCartController = async (req, res) => {
    try {

        const userId = req.user.id; 
        const { productId } = req.body;

        const cart = await addToCartService(userId, productId);

        res.status(201).json({
            success: true,
            message: "Product added to cart",
            data: cart
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


export const updateCartController = async (req, res) => {
    try {

        const userId = req.user.id;
        const cartId = req.params.id;
        const { action } = req.body;

        const cart = await updateCartService(userId, cartId, action);

        res.status(200).json({
            success: true,
            message: `Quantity ${action}d successfully`,
            data: cart
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


export const getCartController = async (req, res) => {
    try {

        const userId = req.user.id;

        const cart = await getCartService(userId);

        res.status(200).json({
            success: true,
            data: cart
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


export const removeCartController = async (req, res) => {
    try {

        const userId = req.user.id;
        const cartId = req.params.id;

        await removeCartService(userId, cartId);

        res.status(200).json({
            success: true,
            message: "Item removed from cart"
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};