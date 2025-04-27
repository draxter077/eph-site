export default function img(){
    let style = `
        {
            height:calc(3*var(--titleFontSize));
            margin:0px 0px 0px 10px;
        }
        :responsive{
            height:fit-content;
            width:20%;
        }`

    const img = cE("img", style)
    img.src = "./assets/bot.png"
    return(img)
}