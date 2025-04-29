import back from "./back/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:flex-end;
            width:100%;
            padding:10px;
        }`

    const head = cE("div", style)
    head.appendChild(back())
    return(head)
}