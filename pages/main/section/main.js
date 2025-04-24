import title from "./title/main.js"
import items from "./items/main.js"

export default function section(t, products){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
            margin:50px 0px 0px 0px;
        }`

    const section = cE("div", style)
    section.appendChild(title(t))
    section.appendChild(items(products))
    return(section)
}