import item from "./item/main.js"

export default function items(products){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            flex-wrap:wrap;
            width:100%;
            padding:20px;
        }
        :responsive{padding:0px;}`

    const items = cE("div", style)
    for(let i = 0; i < products.length; i++){items.appendChild(item(products[i]))}
    return(items)
}