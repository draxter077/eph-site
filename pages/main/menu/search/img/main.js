export default function img(){
    let style = `
        {
            height:var(--titleFontSize);
            margin:0px 0px 0px 10px;
        }`

    const img = cE("img", style)
    img.src = "./assets/lupa.png"
    return(img)
}