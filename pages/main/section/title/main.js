export default function title(t){
    let style = `
        {
            font-size:var(--titleFontSize);
            color:var(--colorOrange);
            width:100%;
            border-bottom:1px solid var(--colorOrange);
            padding:5px 10px;
            font-weight:600;
        }
        :responsive{font-size:calc(0.8*var(--titleFontSize))}`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}