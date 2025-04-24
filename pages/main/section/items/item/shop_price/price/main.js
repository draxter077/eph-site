export default function price(p){
    let style = `
        {
            color:var(--colorGreen);
            font-size:var(--productPriceFontSize);
        }
        :responsive{font-size:calc(0.8*var(--productPriceFontSize))}`

    const price = cE("div", style)
    price.innerHTML = p
    return(price)
}