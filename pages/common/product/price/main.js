export default function price(p){
    let style = `
        {
            font-size:22px;
            color:var(--colorWhite);
            background:var(--colorOrange);
            text-align:right;
            padding:0px 5px 5px;
        }
        :responsive{
            font-size:16px;
            padding:0px 5px 2px;
        }`

    const price = cE("div", style)
    price.innerHTML = p
    return(price)
}