import input from "./input/main.js"
import img from "./img/main.js"

export default function search(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            width:100%;
        }`

    const search = cE("div", style)
    search.appendChild(input())
    search.appendChild(img())
    return(search)
}