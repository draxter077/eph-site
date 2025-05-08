import logo from "./logo/main.js"
import link from "./link/main.js"

export default function head(l1, l2){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            width:100%;
            background:var(--colorOrange);
            padding:10px;
            box-shadow:0px 0px 3px 0px var(--colorBlack);
        }
        :responsive{
            flex-wrap:wrap;
        }`

    const head = cE("div", style)
    head.appendChild(link(l1.t, l1.url))
    head.appendChild(logo())
    head.appendChild(link(l2.t, l2.url))
    return(head)
}