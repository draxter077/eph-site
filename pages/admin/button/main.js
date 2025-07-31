export default function button(products){
    let style = `
        {
            font-size:18px;
            background:var(--colorWhite);
            color:var(--colorBlack);
            padding:5px 10px;
            margin:0px 0px 10px 0px;
            border-radius:10px;
        }`

    const button = cE("textarea", style)
    button.rows = "1"
    button.value = "Encontrar novos produtos"    

    button.addEventListener(
        "click",
        async function a(){
            button.value = "Procurando..."
            button.disabled = true

            axios.defaults.headers.common["X-goog-api-key"] = "AIzaSyD7Gqevs5TflzqC87AFi6pMEXhpNXueKUg" // Faz o pedido para o Google
            let req = `Considerando esta lista de produtos ${JSON.stringify(products)}, retorne links de produtos da Amazon e da Shopee, pelo menos 20 produtos de cada uma, que não estejam nessa lista, e que você acha que sejam relevantes para um marketplace geral. Sua resposta será um conjunto de linhas, cada uma no formato "URL - Título do produto", sem nenhum outro conteúdo.`
            await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", {"contents": [{"parts": [{"text":req}]}]})
                .then(r =>  button.value = r.data.candidates[0].content.parts[0].text)
                .catch(r => button.value = JSON.stringify(r))
            
            button.disabled = false
            button.rows = "20"
            button.removeEventListener("click", a)
        }
    )

    return(button)
}