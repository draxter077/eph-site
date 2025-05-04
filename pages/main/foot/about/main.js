import logo from "./logo/main.js"
import text from "./text/main.js"
import img from "./img/main.js"
import cross from "./cross/main.js"

export default function about(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            margin:10px 0px 0px 0px;
        }`

    const about = cE("div", style)
    about.appendChild(logo())
    about.appendChild(text())
    about.appendChild(img("./assets/ph.jpg", "https://www.ph.net.br"))
    about.appendChild(cross())
    about.appendChild(img("./assets/goldilocks.png", "https://www.instagram.com/goldilocks_marketing/"))
    return(about)
}