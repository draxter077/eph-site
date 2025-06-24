import loading from "../common/loading/main.js"

import head from "../common/head/main.js"
import outdoor from "./outdoor/main.js"
import categories from "./categories/main.js"
import section from "../common/section/main.js"
import foot from "../common/foot/main.js"

import products from "../../products.js"

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            height:fit-content;
            overflow:hidden;
        }`

    const main = cE("div", style)
    main.appendChild(loading())
    
    main.appendChild(head({t:"Chat",url:"/chat"},{t:"Feed",url:"/feed"}))
    main.appendChild(outdoor())
    main.appendChild(categories())
    let pdtsR = []
    while(true){
        let rId = Math.floor(products.length*Math.random())
        let p = products[rId]
        if(!pdtsR.includes(p)){
            pdtsR.push(p)
        }
        if(pdtsR.length > 25){break}
    }
    main.appendChild(section("Recomendações", pdtsR))
    main.appendChild(section("Em alta", [
                                            products[68],
                                            products[69],
                                            products[71],
                                            products[70],
                                            products[73],
                                            products[72],
                                            products[75],
                                            products[77],
                                            products[76],
                                            products[67],
                                            products[82]
                                        ].reverse()))

    let pdts = [...products]
    pdts.reverse().splice(50, pdts.length - 50)
    main.appendChild(section("Novas ofertas", pdts))
    main.appendChild(foot())
    return(main)
}