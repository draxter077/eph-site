export default function text(t){
    let style = `
        {
            font-size:15px;
            color:var(--colorWhite);
            margin:0px 5px;
            text-wrap:nowrap;
            overflow:hidden;
        }`

    const text = cE("div", style)
    text.innerHTML = t
    return(text)
}