export default function img(){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;
            height:90%;
            animation:goDown 1s linear 0s infinite alternate,goRight 1.5s linear 0s infinite alternate;
        }
        @keyframes goDown{0%[top:0%]100%[top:10%]}
        @keyframes goRight{0%[left:0%]100%[left:10%]}`

    const img = cE("img", style)
    img.src = "./assets/bot.png"
    return(img)
}