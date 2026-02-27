import express from "express"
import { supabase } from "../config/supabase.js"

const router = express.Router()

router.get("/:userId", async (req, res) => {
    try {
        const { data: sales, error } = await supabase
            .from("sales")
            .select("*")
            .eq("user_id", req.params.userId)

        if (error) throw error

        const total = sales?.length || 0
        const revenue = sales?.reduce(
            (acc, sale) => acc + sale.value,
            0
        ) || 0

        res.json({ total, revenue })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

export default router