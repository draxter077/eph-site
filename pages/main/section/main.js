import title from "./title/main.js"
import items from "./items/main.js"
import ad from "./ad/main.js"

export default function section(t, products, s){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:95%;
            margin:20px 0px 0px 0px;
        }`

    const section = cE("div", style)
    section.id = t
    section.appendChild(title(t))
    section.appendChild(items(products, s))
    //section.appendChild(ad())
    return(section)
}