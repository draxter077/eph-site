export default function logo(){
    let style = `
        {
            height:100px;
            margin:0px 20px 0px 0px;
            border-radius:15px;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/counterlogoinverted.png"
    return(logo)
}