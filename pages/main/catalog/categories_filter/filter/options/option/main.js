import item from "../../../../items/item/main.js"
import products from "../../../../../../../products.js"

export default function option(src, s){
    let style = `
        {
            width:calc(100% - 10px);
            cursor:pointer;
            margin:5px;
        }`

    const option = cE("img", style)
    option.src = src

    option.addEventListener(
        "click",
        function a(){
            let itemsDiv = document.getElementById("catalog").children[3]
            let items = itemsDiv.children
            let ps = []

            for(let i = 0; i < items.length; i++){ps.push(products[items[i].id])}
            if(s == 0){ps.sort((a, b) => Number((a.price).replaceAll(",", ".")) - Number((b.price).replaceAll(",", ".")))}
            else if(s == 1){ps.sort((a, b) => Number((b.price).replaceAll(",", ".")) - Number((a.price).replaceAll(",", ".")))}
            
            itemsDiv.innerHTML = ""
            for(let i = 0; i < ps.length; i++){itemsDiv.appendChild(item(ps[i]))}
        }
    )

    return(option)
}