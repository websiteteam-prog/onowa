import app from "./app"
import config from "./config/config"

const PORT = config.port || 4001

app.listen(PORT,()=>{
    console.log(`Server is listeing at PORT localhost:${PORT}`)
})