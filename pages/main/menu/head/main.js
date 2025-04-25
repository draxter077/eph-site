import close from "./close/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            width:100%;
            padding:20px 0px 0px 20px;
        }
        :responsive{padding:10px;}`

    const head = cE("button", style)
    head.appendChild(close())
    return(head)
}