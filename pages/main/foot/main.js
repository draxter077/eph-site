import about from "./about/main.js"
import links from "./links/main.js"

export default function foot(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-evenly;
            align-items:center;
            width:100%;
            padding:5px 5px 10px 5px;
            margin:20px 0px 0px 0px;
            background:var(--colorOrange);
            box-shadow:0px 0px 1px 0px var(--colorBlack);
        }
        :responsive{flex-direction:column}`

    const foot = cE("div", style)
    foot.id = "Sobre"
    foot.appendChild(about())
    foot.appendChild(links())
    return(foot)
}