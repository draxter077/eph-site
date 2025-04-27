import logo from "./logo/main.js"
import links from "./links/main.js"

export default function head(){
    let style = `
        {                
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            width:100%;
            padding:0px 40px;
            background:var(--colorOrange);
            box-shadow:0px 0px 5px 0px var(--colorBlack);
        }
        :responsive{flex-direction:column;}`

    const head = cE("div", style)
    head.appendChild(links([["TOP 10","🔥 TOP 10"], ["Recém adicionados","✨ Recém adicionados"]]))
    head.appendChild(logo())
    head.appendChild(links([["Últimas unidades","😱 Últimas unidades"], ["Todos os produtos","🛒 Todos os produtos"]]))
    return(head)
}