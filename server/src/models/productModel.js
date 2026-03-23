import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Product = sequelize.define(
    "Product",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        kilometersDriven: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        fuelType: {
            type: DataTypes.ENUM("Petrol", "Electric"),
            defaultValue: "Petrol",
        },

        ownerType: {
            type: DataTypes.ENUM(
                "First Owner",
                "Second Owner",
                "Third Owner"
            ),
            defaultValue: "First Owner",
        },

        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.TEXT,
        },

        image: {
            type: DataTypes.STRING,
        },

        status: {
            type: DataTypes.ENUM("Available", "Sold"),
            defaultValue: "Available",
        },
    },
    {
        timestamps: true,
        tableName: "products",
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
);

export default Product;