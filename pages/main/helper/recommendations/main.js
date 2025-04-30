import button from "./button/main.js"
import items from "./items/main.js"

export default function recommendations(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            background:var(--colorWhite);
            box-shadow:0px 0px 5px 5px var(--colorWhite);
            width:100%;
            height:60%;
        }`

    const recommendations = cE("div", style)
    recommendations.appendChild(button())
    recommendations.appendChild(items())
    return(recommendations)
}