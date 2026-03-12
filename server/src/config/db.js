import { Sequelize } from "sequelize"
import config from "./config"

const sequelize = new Sequelize(
    config.database.user,
    config.database.database,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect,
        logging: true // production me false
    }
)

export default sequelize