import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Contact = sequelize.define(
  "Contact",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false
    },

    phone: {
      type: DataTypes.STRING
    },

    message: {
      type: DataTypes.TEXT
    }
  },
  {
    tableName: "contacts",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false
  }
);

export default Contact;