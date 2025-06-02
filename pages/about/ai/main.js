import logo from "./logo/main.js"
import text from "./text/main.js"

export default function ai(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            width:90%;
        }
        :responsive{
            flex-direction:column;
        }`

    const ai = cE("div", style)
    ai.appendChild(logo())
    ai.appendChild(text())
    return(ai)
}