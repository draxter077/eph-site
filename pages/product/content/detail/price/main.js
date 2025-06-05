import value from "./value/main.js"
import sells from "./sells/main.js"

export default function price(p, se){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }`

    const price = cE("div", style)
    price.appendChild(value(p))
    price.appendChild(sells(se))
    return(price)
}