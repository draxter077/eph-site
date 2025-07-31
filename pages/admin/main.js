import products from "../../products.js"

import button from "./button/main.js"
import line from "./line/main.js"

export default function admin(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            padding:10px;
            background:var(--colorBlack);
        }`

    const admin = cE("div", style)
    admin.appendChild(button(products))
    for(let i = 0; i < products.length; i++){
        let p = products[i]
        admin.appendChild(line(p))
    }
    return(admin)
}