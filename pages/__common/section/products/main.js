import scroller from "./scroller/main.js"

export default function products(pdts){
    let style = `
        {
            display:flex;
            flex-direction:row;
            flex-wrap:no-wrap;
            width:100%;
            overflow-x:scroll;
        }`

    const products = cE("div", style)
    products.appendChild(scroller(pdts))
    return(products)
}