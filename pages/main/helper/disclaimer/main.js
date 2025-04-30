import logo from "./logo/main.js"
import text from "./text/main.js"

export default function disclaimer(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            width:95%;
        }`

    const disclaimer = cE("div", style)
    disclaimer.appendChild(logo())
    disclaimer.appendChild(text())
    return(disclaimer)
}