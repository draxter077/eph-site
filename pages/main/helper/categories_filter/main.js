import categories from "./categories/main.js"
import filter from "./filter/main.js"

export default function categories_filter(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            flex-wrap:nowrap;
            width:100%;
            padding:0px 40px;
        }
        :responsive{padding:10px;}`

    const categories_filter = cE("div", style)
    categories_filter.appendChild(categories())
    categories_filter.appendChild(filter())
    return(categories_filter)
}