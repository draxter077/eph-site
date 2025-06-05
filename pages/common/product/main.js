import photo from "./photo/main.js"
import title from "./title/main.js"
import price from "./price/main.js"
import shop from "./shop/main.js"

export default function product(p){
    let style = `
        {
            position:relative;
            display:flex;
            flex-direction:column;
            margin:5px;
            width:170px;
            height:fit-content;
            border-radius:10px;
            overflow:hidden;
            cursor:pointer;
            transition:transform var(--transitionTime);
            box-shadow:0px 0px 1px 0px var(--colorBlack);
        }
        :hover{
            transform:scale(1.05);
        }
        :responsive{
            width:130px;
        }`

    const product = cE("div", style)
    product.id = p.id
    product.addEventListener(
        "click",
        function a(){
            window.open(`/produto?${p.id}`, "_blank")
        }
    )
    product.appendChild(photo(p.src))
    product.appendChild(title(p.title))
    product.appendChild(price(p.price))
    product.appendChild(shop(p.shop))
    return(product)
}