export default function logo(){
    let style = `
        {
            height:50px;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/logo.png"
    return(logo)
}