import { DataTypes } from "sequelize"
import sequelize from "../config/db.js"

const User = sequelize.define("User",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },

        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },

        role: {
            type: DataTypes.ENUM("user", "admin"),
            allowNull: false,
            defaultValue: "user"
        },
        resetToken: {
            type: DataTypes.STRING
        },

        resetTokenExpiry: {
            type: DataTypes.DATE
        }
    },
    {
        timestamps: true,
        tableName: "users",
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
)

export default User