import app from "./app.js"
import config from "./config/config.js"

const PORT = config.port || 4001

app.listen(PORT,()=>{
    console.log(`Server is listeing at PORT http://localhost:${PORT}`)
})