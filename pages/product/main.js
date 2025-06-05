import head from "../common/head/main.js"
import content from "./content/main.js"
import foot from "../common/foot/main.js"

import loading from "../common/loading/main.js"

export default function product(id){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:100dvh;
        }`

    const product = cE("div", style)
    product.appendChild(loading())
    product.appendChild(head({t:"Chat",url:"/chat"},{t:"Feed",url:"/feed"}))
    product.appendChild(content(id))
    product.appendChild(foot())
    return(product)
}