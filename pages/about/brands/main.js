import title from "./title/main.js"
import detail from "./detail/main.js"

export default function brands(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:90%;
        }`

    const brands = cE("div", style)
    brands.appendChild(title())
    brands.appendChild(detail())
    return(brands)
}