export default function logo(){
    let style = `
        {
            width:30%;
            animation:alive 2s linear 0s infinite alternate;
        }
        :responsive{
            width:50%;
        }
        @keyframes alive{
            0%[transform:scale(1.0)]
            100%[transform:scale(1.1)]
        }`

    const logo = cE("img", style)
    logo.src = "./assets/counterlogo.png"
    return(logo)
}