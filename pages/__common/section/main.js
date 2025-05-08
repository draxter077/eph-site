import title from "./title/main.js"
import products from "./products/main.js"

export default function section(t, pdts){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
            margin:30px 0px 30px 0px;
        }
        :responsive{
            width:95%;
        }`

    const section = cE("div", style)
    section.appendChild(title(t))
    section.appendChild(products(pdts))
    return(section)
}