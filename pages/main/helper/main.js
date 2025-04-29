import head from "./head/main.js"
import search from "./search/main.js"
import categories from "./categories/main.js"
import items from "./items/main.js"

import products from "../../../products.js"

export default function helper(){
    let style = `
        {
            position:fixed;
            z-index:2;
            top:0%;
            right:-100%;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            height:100dvh;
            width:100%;
            background:var(--colorWhite);
            transition:right var(--transitionTime);
        }`

    const helper = cE("div", style)
    helper.id = "helper"
    helper.appendChild(head())
    helper.appendChild(search())
    helper.appendChild(categories())
    helper.appendChild(items(products.reverse()))
    return(helper)
}