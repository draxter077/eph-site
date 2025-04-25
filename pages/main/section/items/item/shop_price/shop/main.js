export default function shop(s){
    let style = `
        {
            height:calc(1.5*var(--productPriceFontSize));
            padding:2px;
            border-radius:10px;
            background:var(--colorWhite);
        }
        :responsive{height:calc(1.4*var(--productPriceFontSize))}`

    const shop = cE("img", style)
    shop.src = s
    return(shop)
}