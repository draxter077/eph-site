import text from "./text/main.js"
import img from "./img/main.js"

export default function disclaimer(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            width:100%;
            margin:10px 0px;
        }`

    const disclaimer = cE("div", style)
    disclaimer.appendChild(text())
    disclaimer.appendChild(img())
    return(disclaimer)
}