export default function logo(){
    let style = `
        {
            width:30%;
            margin:0px 0px 20px 0px;
        }
        :responsive{
            width:50%;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/counterlogoinverted.png"
    return(logo)
}