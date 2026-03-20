import {
  addWishlistService,
  getWishlistService,
  removeWishlistService
} from "./wishlistService.js";


export const addWishlistController = async (req, res) => {
  try {

    const userId = req.user.id; // from token
    const { productId } = req.body;

    const wishlist = await addWishlistService(userId, productId);

    res.status(201).json({
      success: true,
      message: "Product added to wishlist",
      data: wishlist
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });

  }
};


export const getWishlistController = async (req, res) => {
  try {

    const userId = req.user.id; // token se

    const wishlist = await getWishlistService(userId);

    res.status(200).json({
      success: true,
      data: wishlist
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


export const removeWishlistController = async (req, res) => {
  try {

    const userId = req.user.id;
    const wishlistId = req.params.id;

    await removeWishlistService(userId, wishlistId);

    res.status(200).json({
      success: true,
      message: "Item removed from wishlist"
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });

  }
};