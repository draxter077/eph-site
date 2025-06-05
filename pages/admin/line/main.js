import text from "./text/main.js"
import img from "./img/main.js"

export default function line(p){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            width:100%;
            padding:5px;
            border:1px solid var(--colorOrange);
            cursor:pointer;
            margin:2px 0px;
            transition:border 0.5s;
        }
        :hover{
            border:1px solid var(--colorWhite);
        }`

    const line = cE("div", style)
    line.addEventListener("click", () => window.open(`/produto?${p.id}`,"_blank"))

    let id = text(p.id)
    id.style.width = "50px"
    if(window.innerWidth < 1000){id.style.width = "30px"}
    let title = text(p.title)
    title.style.width = "1000px"
    if(window.innerWidth < 1000){title.style.width = "170px"}

    line.appendChild(id)
    line.appendChild(img(p.src))
    line.appendChild(title)
    line.appendChild(text(p.price))
    return(line)
}