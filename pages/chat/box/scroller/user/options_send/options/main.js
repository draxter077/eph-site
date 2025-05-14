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
        options.appendChild(option("Quero encontrar algo para mim mesmo", 0))
        options.appendChild(option("Presente de casamento", 0))
        options.appendChild(option("Presente para amigo secreto", 0))
        options.appendChild(option("Presente para namorado", 0))
        options.appendChild(option("Presente para namorada", 0))
        options.appendChild(option("Presente para amigo", 0))
        options.appendChild(option("Presente para amiga", 0))
        options.appendChild(option("Presente para pai", 0))
        options.appendChild(option("Presente para mâe", 0))
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