import item from "./item/main.js"

export default function items(products){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            flex-wrap:wrap;
            width:100%;
            height:80%;
            background:var(--colorWhite);
            border-radius:20px 20px 15px 15px;
            overflow-y:scroll;
            padding:10px;
        }
        :responsive{padding:5px;}`

    const items = cE("div", style)
    for(let i = 0; i < products.length; i++){items.appendChild(item(products[i]))}
    return(items)
}