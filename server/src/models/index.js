import Cart from "./cartModel.js";
import Product from "./productModel.js";
import Wishlist from "./wishlistModel.js";

// -------------------- CART RELATION --------------------
Cart.belongsTo(Product, {
  foreignKey: "productId"
});

Product.hasMany(Cart, {
  foreignKey: "productId"
});

// -------------------- WISHLIST RELATION --------------------
Wishlist.belongsTo(Product, {
  foreignKey: "productId"
});

Product.hasMany(Wishlist, {
  foreignKey: "productId"
});

// -------------------- EXPORT --------------------
export { Cart, Product, Wishlist };