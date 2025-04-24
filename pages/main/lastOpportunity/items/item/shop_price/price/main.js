export default function price(p){
    let style = `
        {
            color:var(--colorGreen);
            font-size:var(--productPriceFontSize);
        }`

    const price = cE("div", style)
    price.innerHTML = p
    return(price)
}