import Cart from "./cartModel.js";
import Product from "./productModel.js";

// Define relations here
Cart.belongsTo(Product, {
  foreignKey: "productId"
});

Product.hasMany(Cart, {
  foreignKey: "productId"
});

export { Cart, Product };