export default function logo(){
    let style = `
        {
            height:calc(4*var(--titleFontSize));
        }
        :responsive{height:calc(2.5*var(--titleFontSize))}`

    const logo = cE("img", style)
    logo.src = "./assets/logo.png"
    return(logo)
}