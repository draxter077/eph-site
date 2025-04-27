import menu from "./menu/main.js"
import logo from "./logo/main.js"
import info from "./info/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            width:100%;
            padding:0px 40px;
            background:var(--colorOrange);
            box-shadow:0px 0px 5px 0px var(--colorBlack);
        }`

    const head = cE("div", style)
    //head.appendChild(menu())
    head.appendChild(logo())
    //head.appendChild(info())
    return(head)
}