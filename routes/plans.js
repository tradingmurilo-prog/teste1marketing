import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.json([
        { name: "Starter", price: 79, messages: 1000 },
        { name: "Pro", price: 199, messages: 5000 },
        { name: "Business", price: 399, messages: 15000 },
        { name: "Enterprise", price: 1099, messages: 50000 }
    ])
})

export default router