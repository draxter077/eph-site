import img from "./img/main.js"

export default function logo(){
    let style = `
        {
            display:flex;
            justify-content:center;
            align-items:center;
            height:70px;
        }
        :responsive{width:100%;}`

    const logo = cE("div", style)
    logo.appendChild(img())
    return(logo)
}