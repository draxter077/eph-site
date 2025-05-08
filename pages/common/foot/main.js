import text from "./text/main.js"
import links from "./links/main.js"

export default function foot(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            width:100%;
            padding:10px;
            background:var(--colorOrange);
            box-shadow:0px 0px 3px 0px var(--colorBlack);
        }
        :responsive{
            flex-direction:column;
        }`

    const foot = cE("div", style)
    foot.appendChild(text())
    foot.appendChild(links())
    return(foot)
}