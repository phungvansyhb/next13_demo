import { ChatGPTAPI } from 'chatgpt'

export async function example() {
    const api = new ChatGPTAPI({
        apiKey: process.env.OPENAI_API_KEY as string
    })

    const res = await api.sendMessage('Hello World!')
    console.log(res.text)
}