export default function title(){
    let style = `
        {
            font-size:var(--titleFontSize);
            color:var(--colorYellow);
            border-bottom:1px solid var(--colorYellow);
            width:fit-content;
            padding:5px 10px;
            font-weight:600;
        }`

    const title = cE("div", style)
    title.innerHTML = "Últimas oportunidades"
    return(title)
}