export default function price(p){
    let style = `
        {
            color:var(--colorWhite);
            font-size:var(--productPriceFontSize);
            font-weight:600;
        }
        :responsive{font-size:calc(0.9*var(--productPriceFontSize))}`

    const price = cE("div", style)
    price.innerHTML = p
    return(price)
}