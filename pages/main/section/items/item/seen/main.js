export default function seen(){
    let style = `
        {
            width:100%;
            text-align:center;
            color:var(--colorOrange);
            font-size:calc(0.75*var(--productPriceFontSize));
            padding:1px;
            border-radius:0px 10px 10px 0px;
        }
        :responsive{font-size:calc(0.6*var(--productPriceFontSize))}`

    const seen = cE("div", style)
    let views = Math.floor(10*(Math.random()))
    if(views > 0){seen.innerHTML = `Visto ${views}x agora`}
    return(seen)
}