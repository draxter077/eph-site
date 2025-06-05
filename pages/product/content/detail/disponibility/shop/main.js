import text from "./text/main.js"
import img from "./img/main.js"

export default function shop(s){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
        }
        :responsive{
            margin:0px 0px 10px 0px;
        }`

    const shop = cE("div", style)
    shop.appendChild(text())
    shop.appendChild(img(s))
    return(shop)
}