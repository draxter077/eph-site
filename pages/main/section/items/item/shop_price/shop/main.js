export default function shop(s){
    let style = `
        {
            height:calc(1.5*var(--productPriceFontSize));
        }`

    const shop = cE("img", style)
    shop.src = s
    return(shop)
}