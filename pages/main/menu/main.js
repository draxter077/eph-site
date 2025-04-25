import head from "./head/main.js"
import search from "./search/main.js"
import categories from "./categories/main.js"
import items from "../section/items/main.js"
import products from "../products.js"

export default function menu(){
    let style = `
        {
            position:fixed;
            top:0%;
            left:-100%;
            display:flex;
            flex-direction:column;
            width:100%;
            height:100%;
            background:var(--colorWhite);
            z-index:5;
            transition:left var(--transitionTime);
        }`

    const menu = cE("div", style)
    menu.id = "menu"
    menu.appendChild(head())
    menu.appendChild(search())
    menu.appendChild(categories())
    menu.appendChild(items(products))
    menu.children[3].style = "height:72%;overflow:scroll;"
    return(menu)
}