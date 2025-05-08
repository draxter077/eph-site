import img from "./img/main.js"
import title from "./title/main.js"
import price from "./price/main.js"
import shop from "./shop/main.js"

export default function product(p){
    let style = `
        {
            position:relative;
            display:flex;
            flex-direction:column;
            margin:10px;
            width:170px;
            height:fit-content;
            border-radius:10px;
            overflow:hidden;
            cursor:pointer;
            transition:transform var(--transitionTime);
            box-shadow:0px 0px 2px 0px var(--colorOrange);
        }
        :hover{
            transform:scale(1.05);
        }
        :responsive{
            width:90px;
        }`

    const product = cE("div", style)
    product.id = p.id
    product.addEventListener(
        "click",
        function a(){
            window.open(p.url, "_blank")
        }
    )
    product.appendChild(img(p.src))
    product.appendChild(title(p.title))
    product.appendChild(price(p.price))
    product.appendChild(shop(p.shop))
    return(product)
}