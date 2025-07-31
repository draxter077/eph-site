import textarea from "./textarea/main.js"

export default function content(){
    let style = `
        {
            width:60%;
            background:var(--colorOrange02);
            border-radius:10px;
            padding:15px 10px;
        }
        :responsive{
            width:90%;
        }`

    const content = cE("div", style)
    content.appendChild(textarea())
    return(content)
}