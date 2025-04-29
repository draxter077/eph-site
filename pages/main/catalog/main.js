import head from "./head/main.js"
import search from "./search/main.js"
import categories from "./categories/main.js"
import items from "./items/main.js"

import products from "../../../products.js"

export default function catalog(){
    let style = `
        {
            position:fixed;
            z-index:2;
            top:0%;
            left:-100%;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            height:100dvh;
            width:100%;
            background:var(--colorWhite);
            transition:left var(--transitionTime);
        }`

    const catalog = cE("div", style)
    catalog.id = "catalog"
    catalog.appendChild(head())
    catalog.appendChild(search())
    catalog.appendChild(categories())
    catalog.appendChild(items(products.reverse()))
    return(catalog)
}