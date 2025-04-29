import button from "./button/main.js"
import items from "./items/main.js"

export default function recommendations(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            margin:10px 0px 0px 0px;
        }
        :responsive{margin:5px 0px 0px 0px}`

    const recommendations = cE("div", style)
    recommendations.appendChild(button())
    recommendations.appendChild(items())
    return(recommendations)
}