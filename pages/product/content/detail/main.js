import title from "./title/main.js"
import price from "./price/main.js"
import disponibility from "./disponibility/main.js"
import disclaimer from "./disclaimer/main.js"

export default function detail(t, c, p, s, se, url){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            align-items:center;
            height:60dvh;
            width:100%;
            margin:0px 0px 0px 20px;
        }
        :responsive{
            margin:0px;
            height:fit-content;
        }`

    const detail = cE("div", style)
    detail.appendChild(title(t, c))
    detail.appendChild(price(p, se))
    detail.appendChild(disponibility(s, url))
    //detail.appendChild(disclaimer())
    return(detail)
}