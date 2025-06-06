import head from "../common/head/main.js"
import content from "./content/main.js"
import section from "../common/section/main.js"
import foot from "../common/foot/main.js"

import loading from "../common/loading/main.js"

import products from "../../products.js"

export default function product(id){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            overflow:hidden;
        }`

    const product = cE("div", style)
    product.appendChild(loading())
    product.appendChild(head({t:"Chat",url:"/chat"},{t:"Feed",url:"/feed"}))
    product.appendChild(content(id))

    let c
    for(let i = 0; i < products.length; i++){
        let p = products[i]
        if(p.id == id){c = p.category;break}
    }

    let pdtsC = []
    for(let i = 0; i < products.length; i++){
        let p = products[i]
        if(p.category.includes(c) && p.id != id){
            pdtsC.push(p)
        }
    }

    let pdtsR = []
    while(true){
        let rId = Math.floor(products.length*Math.random())
        let p = products[rId]
        if(p.category.includes(c) && !pdtsR.includes(p)){
            pdtsR.push(p)
        }
        if(pdtsR.length > pdtsC.length/3){break}
    }
    product.appendChild(section("Outros produtos similares", pdtsR))

    product.appendChild(foot())
    return(product)
}