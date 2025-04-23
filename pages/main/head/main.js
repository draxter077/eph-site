import logo from "./logo/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            justify-content:center;
            align-items:center;
            width:100%;
        }`

    const head = cE("div", style)
    head.appendChild(logo())
    return(head)
}