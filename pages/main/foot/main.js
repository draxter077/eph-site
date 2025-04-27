import img from "./img/main.js"

export default function foot(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            width:100%;
            text-align:center;
            background:var(--colorOrange);
            color:var(--colorWhite);
            box-shadow:0px 0px 5px 0px var(--colorBlack);
        }
        >span{margin:0px 10px 0px 0px;}`

    const foot = cE("div", style)
    foot.innerHTML = "<span>Uma parceria</span>"
    foot.appendChild(img("./assets/ph.jpg", 1.5, 1.3, "https://www.ph.net.br"))
    foot.appendChild(img("./assets/x.png", 0.5, 0.3, undefined))
    foot.appendChild(img("./assets/goldilocks.png", 1.5, 1.3, "https://www.instagram.com/goldilocks_marketing/"))
    return(foot)
}