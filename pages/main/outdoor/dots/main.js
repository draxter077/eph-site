import line from "./line/main.js"

export default function dots(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }`

    const dots = cE("div", style)
    dots.appendChild(line())
    return(dots)
}