import input from "./input/main.js"

export default function search(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:flex-end;
            width:100%;
            margin:10px 0px 0px 0px;
        }
        :responsive{margin:0px;}`

    const search = cE("div", style)
    search.appendChild(input())
    return(search)
}