import head from "../common/head/main.js"
import title from "./title/main.js"
import section from "../common/section/main.js"
import subcategories from "./subcategories/main.js"
import search from "./search/main.js"
import foot from "../common/foot/main.js"
import products from "../../products.js"

export default function category(c){
    console.log(c)
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            height:fit-content;
            overflow:hidden;
        }`

    const category = cE("div", style)
    category.appendChild(head({t:"Chat",url:"/chat"},{t:"Sobre",url:"/sobre"}))
    category.appendChild(title(c))

    let pdtsC = []
    let pdtsSC = []
    for(let i = 0; i < products.length; i++){
        let p = products[i]
        if(p.category.includes(c)){
            pdtsC.push(p)
            if(!pdtsSC.includes(p.subcategory)){
                pdtsSC.push(p.subcategory)
            }
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
    category.appendChild(section("Recomendações", pdtsR))

    let pdts = [...pdtsC]
    pdts.reverse().splice(50, pdts.length - 50)
    category.appendChild(section("Novas ofertas", pdts))

    if(pdtsSC.length > 1){
        category.appendChild(subcategories(pdtsSC))
    }
    category.appendChild(search(pdtsC.reverse()))
    
    category.appendChild(foot())
    return(category)
}