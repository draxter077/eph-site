import logo from "./logo/main.js"
import link from "./link/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            width:100%;
            padding:5px;            
            background:var(--colorOrange);
            box-shadow:0px 0px 5px 0px var(--colorBlack);
            opacity:0;
            transition:opacity var(--transitionTime);
        }
        :responsive{flex-wrap:wrap;}`

    const head = cE("div", style)
    head.appendChild(link("Catálogo"))
    head.appendChild(logo())
    head.appendChild(link("Ajuda do Giph"))
    return(head)
}