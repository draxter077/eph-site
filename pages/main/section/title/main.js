export default function title(t){
    let style = `
        {
            font-size:var(--titleFontSize);
            color:var(--colorYellow);
            width:fit-content;
            font-weight:600;
            text-shadow:0px 0px 3px var(--colorBlack);
        }
        :responsive{font-size:calc(0.8*var(--titleFontSize))}`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}