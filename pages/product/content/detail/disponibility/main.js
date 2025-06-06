import shop from "./shop/main.js"
import button from "./button/main.js"

export default function disponibility(s, url){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            width:100%;
        }
        :responsive{
            flex-direction:column;
            margin:20px 0px 0px 0px;
        }`

    const disponibility = cE("div", style)
    disponibility.appendChild(shop(s))
    disponibility.appendChild(button(url))
    return(disponibility)
}