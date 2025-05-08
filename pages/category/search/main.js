import head from "./head/main.js"
import products from "./products/main.js"

export default function search(pdts){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:95%;
            height:95dvh;
            background:var(--colorOrange);
            border-radius:15px;
            padding:5px;
            margin:30px;
        }`

    const search = cE("div", style)
    search.id = "categorySearch"
    search.appendChild(head())
    search.appendChild(products(pdts))
    return(search)
}