import scroller from "./scroller/main.js"

export default function box(){
    let style = `
        {
            display:flex;
            flex-direction:column-reverse;
            height:85dvh;
            width:90%;
            overflow-y:scroll;
            margin:10px 0px;
        }`

    const box = cE("div", style)
    box.appendChild(scroller())
    return(box)
}