export default function seen(){
    let style = `
        {
            width:100%;
            text-align:center;
            color:var(--colorOrange);
            font-size:calc(0.8*var(--productPriceFontSize));
            border-radius:0px 10px 10px 0px;
        }
        :responsive{font-size:calc(0.7*var(--productPriceFontSize))}`

    const seen = cE("div", style)
    let views = Math.floor(10*(Math.random()))
    if(views > 0){seen.innerHTML = `${views} aberto${views > 1 ? "s" : ""} agora`}
    return(seen)
}