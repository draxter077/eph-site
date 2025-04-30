import img from "./img/main.js"

export default function logo(){
    let style = `
        {
            display:flex;
            justify-content:center;
            align-items:center;
            height:70px;
        }
        :responsive{width:100%;height:60px;margin:0px 0px 10px 0px;}`

    const logo = cE("div", style)
    logo.appendChild(img())
    return(logo)
}