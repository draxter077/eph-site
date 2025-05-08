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
    main.appendChild(head({t:"Chat",url:"/chat"},{t:"Sobre",url:"/sobre"}))
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
                                            products[60],
                                            products[157],
                                            products[136],
                                            products[158],
                                            products[118],
                                            products[122],
                                            products[124],
                                            products[159],
                                            products[40],
                                            products[34],
                                            products[38],
                                            products[143],
                                            products[1]
                                        ].reverse()))

    let pdts = [...products]
    pdts.reverse().splice(50, pdts.length - 50)
    main.appendChild(section("Novas ofertas", pdts))
    main.appendChild(foot())
    return(main)
}