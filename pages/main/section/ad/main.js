export default function ad(){
    let style = `
        {
            width:100%;
            height:100px;
            background:purple;
        }`

    const ad = cE("div", style)
    ad.innerHTML = "Anúncio"
    return(ad)
}