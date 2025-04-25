import photo from "./photo/main.js"
import title from "./title/main.js"
import shop_price from "./shop_price/main.js"

export default function item(p){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            width:8%;
            margin:10px;
            border-radius:10px;
            background:var(--colorWhite);
            box-shadow:0px 0px 1px 0px var(--colorOrange);
            cursor:pointer;
            transition:transform var(--transitionTime);
        }
        :responsive{width:30%;margin:5px;}
        :hover{
            transform:scale(1.1);
        }`

    const item = cE("div", style)
    item.id = p.title + " " + p.subcategory + " " + p.category
    item.addEventListener("click", function a(){window.open(p.url, "_blank")})
    item.appendChild(photo(p.src))
    //item.appendChild(title(p.title))
    item.appendChild(shop_price(p.shop, p.price))
    return(item)
}