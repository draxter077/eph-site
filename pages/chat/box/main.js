import scroller from "./scroller/main.js"

export default function box(){
    let style = `
        {
            display:flex;
            flex-direction:column-reverse;
            height:100%;
            width:90%;
            overflow-y:hidden;
            margin:10px 0px;
        }`

    const box = cE("div", style)
    box.appendChild(scroller())
    return(box)
}