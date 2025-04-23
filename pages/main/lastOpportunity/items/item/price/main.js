export default function price(p){
    let style = `
        {
            width:100%;
            text-align:right;
            color:var(--colorGreen);
            font-size:var(--productPriceFontSize);
        }`

    const price = cE("div", style)
    price.innerHTML = p
    return(price)
}