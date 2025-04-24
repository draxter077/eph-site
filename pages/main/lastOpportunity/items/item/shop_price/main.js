import shop from "./shop/main.js"
import price from "./price/main.js"

export default function shop_price(s, p){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            width:100%;
            margin:10px 0px 0px 0px;
        }
        :responsive{flex-direction:column;}`

    const shop_price = cE("div", style)
    shop_price.appendChild(shop(s))
    shop_price.appendChild(price(p))
    return(shop_price)
}