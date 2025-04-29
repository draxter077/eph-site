import photo from "./photo/main.js"
import title from "./title/main.js"
import shop_price from "./shop_price/main.js"
import seen from "./seen/main.js"

export default function item(p){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:150px;
            height:fit-content;
            margin:10px 5px;
            border-radius:10px;
            background:var(--colorWhite);
            opacity:0;
            transform:scale(1.5);
            cursor:pointer;
            transition:transform var(--transitionTime), opacity var(--transitionTime);
        }
        :responsive{width:30%;margin:5px;}
        :hover{transform:scale(1.1) !important;}`

    const item = cE("div", style)
    item.id = p.title + " " + p.category
    item.addEventListener("click", function a(){window.open(p.url, "_blank")})
    item.appendChild(photo(p.src))
    //item.appendChild(title(p.title))
    item.appendChild(shop_price(p.shop, p.price))
    item.appendChild(seen())
    return(item)
}