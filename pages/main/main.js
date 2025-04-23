import head from "./head/main.js"
import lastOpportunity from "./lastOpportunity/main.js"
import bestSellers from "./bestSellers/main.js"
import newProducts from "./newProducts/main.js"

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            height:fit-content;
            color:white;
        }`

    const main = cE("div", style)
    main.appendChild(head())
    main.appendChild(lastOpportunity())
    main.appendChild(bestSellers())
    main.appendChild(newProducts())
    return(main)
}