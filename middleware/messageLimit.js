import { supabase } from "../config/supabase.js"

export async function checkMessageLimit(userId) {
    const { data: user, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", userId)
        .single()

    if (error) throw new Error("Usuário não encontrado")

    if (user.messages_used >= user.messages_limit) {
        throw new Error("Limite de mensagens atingido.")
    }

    const { error: updateError } = await supabase
        .from("users")
        .update({
            messages_used: user.messages_used + 1
        })
        .eq("id", userId)

    if (updateError) throw new Error("Erro ao atualizar contagem de mensagens")
}