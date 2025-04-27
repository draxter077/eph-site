import text from "./text/main.js"
import bot from "./bot/main.js"

export default function disclaimer(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:flex-start;
            width:100%;
            margin:10px 0px 0px 0px;
            opacity:0;
            transition:opacity var(--transitionTime);
        }
        :responsive{align-items:flex-end}`

    const disclaimer = cE("div", style)
    disclaimer.appendChild(text())
    disclaimer.appendChild(bot())
    return(disclaimer)
}