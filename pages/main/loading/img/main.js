export default function img(){
    let style = `
        {
            width:50%;
            animation:alive calc(3*var(--transitionTime)) linear 0s infinite alternate;
        }
        @keyframes alive{
            0%[transform:scale(1)]
            100%[transform:scale(1.1)]
        }`

    const img = cE("img", style)
    img.src = "./assets/logo.png"
    return(img)
}