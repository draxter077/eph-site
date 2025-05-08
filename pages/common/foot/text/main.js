import logo from "./logo/main.js"
import t from "./t/main.js"
import img from "./img/main.js"

export default function text(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
        }`

    const text = cE("div", style)
    text.appendChild(logo())
    text.appendChild(t("é uma parceria"))
    text.appendChild(img("./assets/ph.jpg", "https://www.ph.net.br"))
    text.appendChild(t("x"))
    text.appendChild(img("./assets/goldilocks.png", "https://www.instagram.com/goldilocks_marketing/"))
    return(text)
}