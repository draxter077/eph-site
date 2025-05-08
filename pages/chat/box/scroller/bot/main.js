import logo from "./logo/main.js"
import text from "./text/main.js"

export default function bot(type){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            width:60%;
            margin:5px 0px;
            max-height:0px;
            overflow:hidden;
            transition:all var(--transitionTime);
        }
        :responsive{
            width:90%;
        }`

    const bot = cE("div", style)
    bot.appendChild(logo())
    bot.appendChild(text(type))
    return(bot)
}