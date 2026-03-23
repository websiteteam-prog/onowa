import dotenv from "dotenv";
dotenv.config();
import app from "./app.js"
import config from "./config/config.js"
import sequelize from "./config/db.js"

const PORT = config.port || 3000

sequelize.sync().then(() => {
    console.log("✅ Database connected")
})

app.listen(PORT, () => {
    console.log(`🚀 Server is listening at http://http://localhost:${PORT}`)
})