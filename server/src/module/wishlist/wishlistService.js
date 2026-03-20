import { Wishlist, Product } from "../../models/index.js";

export const addWishlistService = async (userId, productId) => {

  const exist = await Wishlist.findOne({
    where: {
      userId,
      productId
    }
  });

  if (exist) {
    throw new Error("Product already in wishlist");
  }

  return await Wishlist.create({
    userId,
    productId
  });
};

export const getWishlistService = async (userId) => {

  return await Wishlist.findAll({
    where: { userId },
    include: [
      {
        model: Product,
        attributes: ["id", "title", "price", "image"]
      }
    ]
  });
};

export const removeWishlistService = async (userId, wishlistId) => {

  const wishlist = await Wishlist.findOne({
    where: {
      id: wishlistId,
      userId // 🔥 ownership check
    }
  });

  if (!wishlist) {
    throw new Error("Wishlist item not found");
  }

  await wishlist.destroy();

  return true;
};