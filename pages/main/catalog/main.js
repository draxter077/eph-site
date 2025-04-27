import title from "./title/main.js"
import search from "./search/main.js"
import categories from "./categories/main.js"
import items from "./items/main.js"
import products from "../products.js"

export default function catalog(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
            height:100dvh;
        }`

    const catalog = cE("div", style)
    catalog.id = "🛒 Todos os produtos"
    catalog.appendChild(title("🛒 Todos os produtos"))
    catalog.appendChild(search())
    catalog.appendChild(categories())
    catalog.appendChild(items(products))
    catalog.children[3].style = "height:72%;overflow:scroll;"
    return(catalog)
}