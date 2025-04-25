import category from "./category/main.js"

export default function categories(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            padding:0px 40px;
            width:100%;
        }
        :responsive{padding:10px;}`

    const categories = cE("div", style)
    let cs = ["Roupas Masculinas", "Roupas Femininas", "Acessórios Masculinos"]
    for(let i = 0; i < cs.length; i++){categories.appendChild(category(cs[i]))}
    return(categories)
}