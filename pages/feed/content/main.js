import scroller from "./scroller/main.js"

export default function content(){
    let style = `
        {
            height:100%;
            width:95%;
            overflow-y:scroll;
            margin:10px 0px;
        }`

    const content = cE("div", style)
    content.appendChild(scroller())
    return(content)
}