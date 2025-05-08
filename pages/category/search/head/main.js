import logo from "./logo/main.js"
import input from "./input/main.js"
import filter from "./filter/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            width:100%;
            padding:20px 0px;
        }`

    const head = cE("div", style)
    head.appendChild(logo())
    head.appendChild(input())
    //head.appendChild(filter())
    return(head)
}