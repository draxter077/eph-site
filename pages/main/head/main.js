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
            box-shadow:0px 0px 1px 0px var(--colorBlack);
        }
        :responsive{flex-wrap:wrap;}`

    const head = cE("div", style)
    head.appendChild(link("Catálogo", function a(){document.getElementById("catalog").style.left = "0%"}))
    head.appendChild(link("Ajuda do Giph", function a(){document.getElementById("helper").style.left = "0%"}))
    head.appendChild(logo())
    head.appendChild(link("Novas ofertas", function a(){document.getElementById("Novas ofertas").scrollIntoView({behavior:"smooth"})}))
    head.appendChild(link("Sobre o Giph", function a(){document.getElementById("Sobre").scrollIntoView({behavior:"smooth"})}))
    return(head)
}