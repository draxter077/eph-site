export default function label(p, s){
    let style = `
        {
            width:100%;
            text-align:center;
            color:var(--colorOrange);
            font-size:calc(0.8*var(--productPriceFontSize));
            border-radius:0px 10px 10px 0px;
        }
        :responsive{font-size:calc(0.7*var(--productPriceFontSize))}`

    const label = cE("div", style)
    if(s == "seen"){
        let views = Math.floor(10*(Math.random()))
        if(views > 0){label.innerHTML = `${views} aberto${views > 1 ? "s" : ""} agora`}
    }
    else if(s == "sells"){
        label.innerHTML = `${p.sells} vendas`
    }
    return(label)
}