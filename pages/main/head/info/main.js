export default function info(){
    let style = `
        {
            display:flex;
            align-items:center;
            justify-content:center;
            height:calc(1*var(--titleFontSize));
            aspect-ratio:1;
            border-radius:50%;
            font-size:calc(0.7*var(--titleFontSize));
            background:var(--colorYellow);
            color:var(--colorBlack);
            cursor:pointer;
            transition:transform var(--transitionTime);
        }
        :responsive{height:calc(0.85*var(--titleFontSize));font-size:calc(0.55*var(--titleFontSize))}
        :hover{transform:scale(1.2)}`

    const info = cE("div", style)
    info.innerHTML = "i"
    return(info)
}