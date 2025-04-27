import img from "./img/main.js"

export default function bot(){
    let style = `
        {
            position:relative;
            height:calc(5*var(--titleFontSize));
            aspect-ratio:1;
            margin:0px 0px 0px 10px;
        }
        :responsive{
            height:fit-content;
            width:25%;
        }`

    const bot = cE("div", style)
    bot.appendChild(img())
    return(bot)
}