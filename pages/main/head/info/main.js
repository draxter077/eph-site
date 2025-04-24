export default function info(){
    let style = `
        {
            display:flex;
            align-items:center;
            justify-content:center;
            height:calc(1.2*var(--titleFontSize));
            aspect-ratio:1;
            border-radius:50%;
            font-size:var(--titleFontSize);
            background:var(--colorYellow);
            color:var(--colorBlack);
            cursor:pointer;
            transition:transform var(--transitionTime);
        }
        :responsive{height:calc(1*var(--titleFontSize));font-size:calc(0.8*var(--titleFontSize))}
        :hover{transform:scale(1.1) rotate(180deg)}`

    const info = cE("div", style)
    info.innerHTML = "i"
    return(info)
}