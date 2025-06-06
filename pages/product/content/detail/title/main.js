import text from "./text/main.js"
import category from "./category/main.js"

export default function title(t, c){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            width:100%;
        }
        :responsive{
            margin:20px 0px 30px 0px;
        }`

    const title = cE("div", style)
    title.appendChild(text(t))
    title.appendChild(category(c))
    return(title)
}