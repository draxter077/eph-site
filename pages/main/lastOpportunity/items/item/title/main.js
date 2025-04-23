export default function title(t){
    let style = `
        {
            width:100%;
            font-size:var(--productTitleFontSize);
            margin:10px 0px 0px 0px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}