import products from "../../../../../../../products.js"
import product from "../../../../../../common/product/main.js"

export default function textarea(){
    let style = `
        {
            width:100%;
            color:var(--colorBlack);
            font-size:18px;
        }
        :responsive{
            font-size:15px;
        }`

    const textarea = cE("textarea", style)
    textarea.rows = '2'

    textarea.addEventListener(
        "keypress",
        async function a(e){
            if(e.key == "Enter"){
                textarea.disabled = true

                await new Promise(resolve => setTimeout(resolve, 500))
                document.getElementById("botScroller").children[1].style.maxHeight = "1000px" // Abre e escreva o pedido do robõ
                let ws = document.getElementById("botScroller").children[1].children[1].children
                for(let i = 0; i < ws.length; i ++){
                    ws[i].style.opacity = 1
                    await new Promise(resolve => setTimeout(resolve, 100))
                }

                let ids = []
                axios.defaults.headers.common["X-goog-api-key"] = "AIzaSyD7Gqevs5TflzqC87AFi6pMEXhpNXueKUg" // Faz o pedido para o Google
                let req = `Considerando esta lista de produtos ${JSON.stringify(products)}, retorne o maior número de IDs que satisfaçam o seguinte pedido "${e.target.value}". Sua resposta deve ser no formato "ID,ID,ID", sem nenhum outro conteúdo nela.`
                await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", {"contents": [{"parts": [{"text":req}]}]})
                    .then(r =>  ids = r.data.candidates[0].content.parts[0].text.split(","))
                    .catch(r => console.log(r))

                let r = document.getElementById("botScroller").children[0].children[0]
                for(let i = 0; i < ids.length; i++){
                    r.appendChild(product(products[Number(ids[i])]))
                }
            
                document.getElementById("botScroller").children[0].style.maxHeight = "520px" // Apresenta os produtos
            }
        }
    )

    return(textarea)
}