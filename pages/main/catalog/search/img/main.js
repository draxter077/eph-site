export default function img(){
    let style = `
        {
            height:calc(1.3*var(--titleFontSize));
            padding:0px 10px 5px 0px;
            border-bottom:1px solid var(--colorOrange);
        }
        :responsive{height:calc(1*var(--titleFontSize))}`

    const img = cE("img", style)
    img.src = "./assets/lupa.png"
    return(img)
}