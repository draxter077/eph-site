import item from "./item/main.js"

export default function items(products, s){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            width:100%;
            padding:10px;
            overflow-x:scroll;
        }
        :responsive{padding:5px;}`

    const items = cE("div", style)
    for(let i = 0; i < products.length; i++){items.appendChild(item(products[i], s))}
    return(items)
}