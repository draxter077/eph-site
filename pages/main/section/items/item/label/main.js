export default function label(p, s){
    let style = `
        {
            width:100%;
            text-align:center;
            color:var(--colorOrange);
            font-size:13px;
            border-radius:0px 10px 10px 0px;
        }
        :responsive{font-size:12px}`

    const label = cE("div", style)
    if(s == "seen"){
        let views = Math.floor(5*(Math.random()))
        if(views > 0){label.innerHTML = `${views} comprando`}
    }
    else if(s == "sells"){
        label.innerHTML = `${p.sells} vendas`
    }
    return(label)
}