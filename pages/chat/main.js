import head from "../common/head/main.js"
import box from "./box/main.js"
import foot from "../common/foot/main.js"

export default function chat(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            height:100dvh;
            overflow:hidden;
        }`

    const chat = cE("div", style)
    chat.appendChild(head({t:"Início",url:"/"},{t:"Sobre",url:"/sobre"}))
    chat.appendChild(box())
    chat.appendChild(foot())
    return(chat)
}