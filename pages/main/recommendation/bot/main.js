import img from "./img/main.js"

export default function bot(){
    let style = `
        {
            position:relative;
            height:150px;
            width:150px;
            opacity:0;
            transition:opacity var(--transitionTime);
        }
        :responsive{height:100px;width:100px;}`

    const bot = cE("div", style)
    bot.appendChild(img())
    return(bot)
}