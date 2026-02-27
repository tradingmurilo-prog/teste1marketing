import OpenAI from "openai"
import dotenv from "dotenv"

dotenv.config()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY
})

export async function generateSalesResponse(message, products, rules) {

    const systemPrompt = `
Você é uma IA vendedora profissional da Syntra AI.

Produtos disponíveis:
${JSON.stringify(products)}

Regras:
- Desconto máximo permitido: ${rules.maxDiscount}%
- Sempre tentar fechar a venda
- Ser persuasiva e objetiva
- Quando cliente confirmar compra, responder com "VENDA_CONFIRMADA"
`

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: message }
        ]
    })

    return response.choices[0].message.content
}