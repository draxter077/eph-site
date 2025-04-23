import title from "./title/main.js"
import items from "./items/main.js"

export default function lastOpportunity(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
        }`

    const lastOpportunity = cE("div", style)
    lastOpportunity.appendChild(title())
    lastOpportunity.appendChild(items())
    return(lastOpportunity)
}