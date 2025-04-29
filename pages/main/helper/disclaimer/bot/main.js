import img from "./img/main.js"

export default function bot(){
    let style = `
        {
            position:relative;
            height:100px;
            width:100px;
        }
        :responsive{height:80px;width:80px;}`

    const bot = cE("div", style)
    bot.appendChild(img())
    return(bot)
}