import photo from "./photo/main.js"
import title from "./title/main.js"
import shop_price from "./shop_price/main.js"

export default function item(url, src, t, p, shop){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            width:15%;
            padding:10px;
            margin:10px;
            border-radius:10px;
            background:var(--colorWhite);
            cursor:pointer;
            transition:transform var(--transitionTime);
        }
        :responsive{width:40%;}
        :hover{
            transform:scale(1.1);
        }`

    const item = cE("div", style)
    item.addEventListener("click", function a(){window.open(url, "_blank")})
    item.appendChild(photo(src))
    item.appendChild(title(t))
    item.appendChild(shop_price(shop, p))
    return(item)
}