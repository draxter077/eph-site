import head from "./head/main.js"
import search from "./search/main.js"
import categories_filter from "./categories_filter/main.js"
import items from "./items/main.js"

import products from "../../../products.js"

export default function catalog(){
    let style = `
        {
            position:fixed;
            z-index:2;
            top:0%;
            left:-0%;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            height:calc(100dvh - 20px);
            width:calc(100% - 20px);
            background:var(--colorOrange);
            transition:left var(--transitionTime);
            margin:10px;
            box-shadow:0px 0px 10px 0px var(--colorBlack);
            border-radius:15px;
        }
        :responsive{
            height:calc(100dvh - 10px);
            width:calc(100% - 10px);
            margin:5px;
        }`

    const catalog = cE("div", style)
    catalog.id = "catalog"
    catalog.appendChild(head())
    catalog.appendChild(search())
    catalog.appendChild(categories_filter())
    catalog.appendChild(items(products.reverse()))
    return(catalog)
}