import express from "express"
import { supabase } from "../config/supabase.js"

const router = express.Router()

router.post("/", async (req, res) => {
    const { userId, name, price, description } = req.body

    const { error } = await supabase
        .from("products")
        .insert([
            { user_id: userId, name, price, description }
        ])

    if (error) return res.status(400).json(error)

    res.json({ success: true })
})

export default router