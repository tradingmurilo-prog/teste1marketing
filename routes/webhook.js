import express from "express"
import { supabase } from "../config/supabase.js"
import { generateSalesResponse } from "../ai/salesAI.js"
import { checkMessageLimit } from "../middleware/messageLimit.js"

const router = express.Router()

router.post("/", async (req, res) => {
    const { userId, message } = req.body

    try {
        await checkMessageLimit(userId)

        const { data: products } = await supabase
            .from("products")
            .select("*")
            .eq("user_id", userId)

        const { data: rules } = await supabase
            .from("rules")
            .select("*")
            .eq("user_id", userId)
            .single()

        const responseAI = await generateSalesResponse(
            message,
            products,
            rules
        )

        if (responseAI.includes("VENDA_CONFIRMADA")) {
            await supabase
                .from("sales")
                .insert([
                    { user_id: userId, value: products[0]?.price || 0 }
                ])
        }

        res.json({ reply: responseAI })

    } catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
})

export default router