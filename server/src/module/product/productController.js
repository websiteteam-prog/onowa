import db from "../../config/db.js";

export const getProducts = async (req, res) => {
  try {

    const [rows] = await db.query("SELECT * FROM products");

    res.json(rows);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};