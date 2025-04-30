export default function logo(){
    let style = `
        {
            height:40px;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/counterlogo.png"
    return(logo)
}