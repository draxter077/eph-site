import logo from "./logo/main.js"
import input from "./input/main.js"

export default function search(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            width:95%;
        }
        :responsive{margin:0px;}`

    const search = cE("div", style)
    search.appendChild(logo())
    search.appendChild(input())
    return(search)
}