export default function logo(){
    let style = `
        {
            height:40px;
            margin:0px 10px 0px 0px;
            animation:alive 0.75s linear 0s infinite alternate;
        }
        @keyframes alive{
            0%[transform:scale(1)]
            100%[transform:scale(1.2)]
        }`

    const logo = cE("img", style)
    logo.src = "./assets/counterlogoinverted.png"
    return(logo)
}