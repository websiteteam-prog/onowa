import { Cart, Product } from "../../models/index.js";

export const addToCartService = async (userId, productId) => {

    const exist = await Cart.findOne({
        where: {
            userId,
            productId,
            status: "active"
        }
    });

    // ❌ Already exists → throw error
    if (exist) {
        throw new Error("Product already in cart");
    }

    // ✅ New product → add
    const cart = await Cart.create({
        userId,
        productId,
        quantity: 1
    });

    return cart;
};


export const updateCartService = async (userId, cartId, action) => {

    const cart = await Cart.findOne({
        where: {
            id: cartId,
            userId,
            status: "active"
        }
    });

    if (!cart) {
        throw new Error("Cart item not found");
    }

    if (action === "increase") {
        cart.quantity += 1;
    } 
    
    else if (action === "decrease") {

        if (cart.quantity <= 1) {
            throw new Error("Quantity cannot be less than 1");
        }

        cart.quantity -= 1;
    } 
    
    else {
        throw new Error("Invalid action");
    }

    await cart.save();

    return cart;
};


export const getCartService = async (userId) => {

    return await Cart.findAll({
        where: {
            userId,
            status: "active"
        },
        include: [
            {
                model: Product,
                attributes: ["id", "title", "price", "image"]
            }
        ]
    });
};


export const removeCartService = async (userId, cartId) => {

    const cart = await Cart.findOne({
        where: {
            id: cartId,
            userId
        }
    });

    if (!cart) {
        throw new Error("Cart item not found or unauthorized");
    }

    // 🔥 HARD DELETE (DB se remove)
    await cart.destroy();

    return true;
};