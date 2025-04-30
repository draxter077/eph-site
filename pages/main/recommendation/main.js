import bot from "./bot/main.js"
import text from "./text/main.js"
import recommendations from "./recommendations/main.js"

export default function recommendation(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            margin:20px 0px 0px 0px;
        }`

    const recommendation = cE("div", style)
    //recommendation.appendChild(bot())
    //recommendation.appendChild(text())
    recommendation.appendChild(recommendations())
    return(recommendation)
}