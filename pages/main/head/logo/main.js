export default function logo(){
    let style = `
        {
            height:150px;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/logo.png"
    return(logo)
}