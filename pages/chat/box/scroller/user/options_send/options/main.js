import option from "./option/main.js"
import input from "./input/main.js"
import products from "../../../../../../../products.js"

export default function options(type){
    let style = `
        {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            margin:0px 5px;
        }`

    const options = cE("div", style)
    if(type == 0){
        options.appendChild(option("Para mim mesmo", 0))
        options.appendChild(option("Casamento", 0))
        options.appendChild(option("Aniversário Infantil", 0))
        options.appendChild(option("Dia das mães", 0))
        options.appendChild(option("Amigo secreto", 0))
    }
    else if(type == 1){
        let pdtsSC = []
        for(let i = 0; i < products.length; i++){
            if(!pdtsSC.includes(products[i].subcategory) && products[i].subcategory != undefined){
                pdtsSC.push(products[i].subcategory)
            }
        }
        for(let j = 0; j < pdtsSC.length; j++){
            options.appendChild(option(pdtsSC[j]))
        }
    }
    else if(type == 2){
        options.appendChild(input("Valor máximo"))
        options.appendChild(input("Valor mínimo"))
    }
    return(options)
}