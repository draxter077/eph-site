import product from "../../../__common/product/main.js"

export default function products(pdts){
    let style = `
        {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content:space-around;
            width:100%;
            height:85%;
            overflow-y:scroll;
            background:var(--colorWhite);
            border-radius:10px;
        }`

    const products = cE("div", style)
    products.id = "categoryProducts"
    for(let i = 0; i < pdts.length; i++){products.appendChild(product(pdts[i]))}
    return(products)
}