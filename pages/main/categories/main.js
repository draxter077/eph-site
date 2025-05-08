import productsCategoriesNames from "../../common/productsCategoriesNames/main.js"
import category from "./category/main.js"

export default function categories(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            flex-wrap:wrap;
            width:90%;
            margin:40px 0px 0px 0px;
        }
        :responsive{
            margin:20px 0px 0px 0px;
            flex-direction:column;
            justify-content:flex-start;
            width:100%;
            max-height:110px;
            overflow-x:scroll;
        }`

    const categories = cE("div", style)
    let ctgs = productsCategoriesNames()
    for(let i = 0; i < ctgs.length; i++){categories.appendChild(category(ctgs[i]))}
    return(categories)
}