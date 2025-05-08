export default function logo(){
    let style = `
        {
            height:40px;
            margin:0px 5px 0px 0px;
            animation:alive var(--transitionTime) linear 0s infinite alternate;
            animation-play-state:paused;
        }
        @keyframes alive{
            0%[transform:scale(1)]
            100%[transform:scale(1.1)]
        }`

    const logo = cE("img", style)
    logo.src = "./assets/counterlogoinverted.png"
    return(logo)
}