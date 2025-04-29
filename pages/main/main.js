import head from "./head/main.js"
import recommendation from "./recommendation/main.js"
import section from "./section/main.js"

import catalog from "./catalog/main.js"
import helper from "./helper/main.js"

import products from "../../products.js"

function sortProducts(productArray, elements){
    let newArray = []
    for(let i = 0; i < elements.length; i++){newArray.push(productArray[elements[i]])}
    return(newArray)
}

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }`

    const main = cE("div", style)
    main.appendChild(head())
    main.appendChild(recommendation())
    main.appendChild(section("🔥 TOP 10", sortProducts(products, [0,1,14,11,8,5,19,10,6,18,1,1,1,1,1])))
    main.appendChild(section("😱 Últimas unidades", sortProducts(products, [11,10,12,20,16])))
    main.appendChild(section("✨ Recém adicionados", sortProducts(products, [1,0,11])))
    main.appendChild(catalog())
    main.appendChild(helper())
    return(main)
}