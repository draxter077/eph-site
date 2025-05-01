export default function img(){
    let style = `
        {
            width:30%;
            opacity:0;
            animation:alive calc(3*var(--transitionTime)) linear 0s infinite alternate;
        }
        :responsive{width:50%;}
        @keyframes alive{
            0%[opacity:0]
            100%[opacity:1]
        }`

    const img = cE("img", style)
    img.src = "./assets/counterlogo.png"
    return(img)
}