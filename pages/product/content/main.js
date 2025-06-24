import products from "../../../products.js"

import photo from "./photo/main.js"
import detail from "./detail/main.js"

export default function content(id){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            width:90%;
            height:70%;
            margin:7.5vh 0px;
        }
        :responsive{
            flex-direction:column;
            width:95%;
        }`

    const content = cE("div", style)
    let src, t, c, pr, s, se, url

    for(let i = 0; i < products.length; i++){
        let p = products[i]
        if(p.id == id){
            src = p.src
            t = p.title
            c = p.category
            pr = p.price
            s = p.shop
            se = p.sells
            url = p.url
            break
        }
    }

    content.appendChild(photo(src))
    content.appendChild(detail(t, c, pr, s, se, url))
    return(content)
}