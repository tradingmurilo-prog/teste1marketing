import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import plans from "./routes/plans.js"
import products from "./routes/products.js"
import dashboard from "./routes/dashboard.js"
import webhook from "./routes/webhook.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/plans", plans)
app.use("/products", products)
app.use("/dashboard", dashboard)
app.use("/webhook", webhook)

app.get("/", (req, res) => {
    res.send("Syntra AI MVP Running 🚀")
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})