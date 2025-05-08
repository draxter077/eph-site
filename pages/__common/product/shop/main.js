export default function shop(s){
    let style = `
        {
            position:absolute;
            top:5px;
            left:5px;
            height:20px;
            background:var(--colorWhite);
            border-radius:50%;
            padding:2px;
        }`

    const shop = cE("img", style)
    shop.src = "./assets/" + s + ".png"
    return(shop)
}