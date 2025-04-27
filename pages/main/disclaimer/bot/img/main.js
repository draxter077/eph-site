export default function img(){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;
            height:90%;
            animation:goDown calc(2*var(--transitionTime)) linear 0s infinite alternate, goRight calc(2*var(--transitionTime)) linear 0s infinite alternate;
        }
        @keyframes goDown{
            0%[top:0%]
            100%[top:10%]
        }
        @keyframes goRight{
            0%[left:0%]
            100%[left:10%]
        }`

    const img = cE("img", style)
    img.src = "./assets/bot.png"
    return(img)
}