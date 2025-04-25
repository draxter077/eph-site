export default function close(){
    let style = `
        {
            height:calc(0.8*var(--titleFontSize));
            transition:transform var(--transitionTime);
        }
        :hover{transform:scale(1.2)}`

    const close = cE("img", style)
    close.src = "./assets/back.png"
    close.addEventListener(
        "click",
        function a(){document.getElementById("menu").style.left = "-100%"}
    )
    return(close)
}