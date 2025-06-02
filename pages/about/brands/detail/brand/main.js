import logo from "./logo/main.js"
import text from "./text/main.js"

export default function brand(src, url, t){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:45%;
            cursor:pointer;
            transition:transform 0.5s;
        }
        :hover{
            transform:scale(1.05);
        }`

    const brand = cE("div", style)
    brand.addEventListener("click", () => window.open(url, "_blank"))
    brand.appendChild(logo(src))
    brand.appendChild(text(t))
    return(brand)
}