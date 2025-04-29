import bot from "./bot/main.js"
import text from "./text/main.js"

export default function disclaimer(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }`

    const disclaimer = cE("div", style)
    disclaimer.appendChild(bot())
    disclaimer.appendChild(text())
    return(disclaimer)
}