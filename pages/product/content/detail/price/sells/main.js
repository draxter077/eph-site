export default function sells(se){
    let style = `
        {
            font-size:18px;
            color:var(--colorBlack);
        }
        :responsive{
            font-size:13px;
        }`

    const sells = cE("div", style)
    sells.innerHTML = `${se} vendas recentemente`
    return(sells)
}