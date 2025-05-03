import category from "./category/main.js"
import products from "../../../../../products.js"

export default function categories(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            overflow-x:scroll;
            width:100%;
        }
        :responsive{flex-wrap:nowrap;}`

    const categories = cE("div", style)
    let cs = []
    for(let i = 0; i < products.length; i++){
        let c = products[i].category
        if(cs.length == 0){cs.push(c)}
        else{
            for(let j = 0; j < cs.length; j++){
                let cx = cs[j]
                if(cx == c){break}
                else if(j == cs.length - 1){cs.push(c)}
            }
        }
    }
    for(let i = 0; i < cs.length; i++){categories.appendChild(category(cs[i]))}
    return(categories)
}