import photo from "./photo/main.js"
import shop_price from "./shop_price/main.js"
import label from "./label/main.js"

export default function item(p, s){
    let style = `
        {
            display:flex;
            flex-direction:column;
            min-width:150px;
            width:150px;
            margin:10px 5px;
            border-radius:10px;
            background:var(--colorWhite);
            cursor:pointer;
            transition:transform var(--transitionTime), opacity var(--transitionTime);
        }
        :responsive{
            min-width:80px;
            width:80px;
            margin:5px;
        }
        :hover{transform:scale(1.1);}`

    const item = cE("div", style)
    item.addEventListener("click", function a(){window.open(p.url, "_blank")})
    item.appendChild(photo(p.src))
    item.appendChild(shop_price(p.shop, p.price))
    item.appendChild(label(p, s))
    return(item)
}