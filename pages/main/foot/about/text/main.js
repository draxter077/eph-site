export default function text(){
    let style = `
        {
            font-size:15px;
            color:var(--colorWhite);
        }`

    const text = cE("div", style)
    text.innerHTML = "é uma parceria"
    return(text)
}