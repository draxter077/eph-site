export default function seen(){
    let style = `
        {
            width:100%;
            color:var(--colorOrange);
            font-size:calc(0.8*var(--productPriceFontSize));
            padding:5px;
            border-radius:0px 10px 10px 0px;
        }`

    const seen = cE("div", style)
    let views = Math.floor(10*(Math.random()))
    if(views > 0){seen.innerHTML = `Visto ${views}x recentemente`}
    return(seen)
}