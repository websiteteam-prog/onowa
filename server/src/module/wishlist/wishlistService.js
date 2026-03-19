import Wishlist from "../../models/wishlistModel.js";


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

  const wishlist = await Wishlist.create({
    userId,
    productId
  });

  return wishlist;
};



export const getWishlistService = async (userId) => {

  return await Wishlist.findAll({
    where: {
      userId
    }
  });

};



export const removeWishlistService = async (wishlistId) => {

  const wishlist = await Wishlist.findByPk(wishlistId);

  if (!wishlist) {
    throw new Error("Wishlist item not found");
  }

  await wishlist.destroy();

  return true;
};