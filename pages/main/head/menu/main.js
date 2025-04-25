export default function menu(){
    let style = `
        {
            height:calc(0.8*var(--titleFontSize));
            transition:transform var(--transitionTime);
            cursor:pointer;
        }
        :responsive{height:calc(0.65*var(--titleFontSize))}
        :hover{transform:scale(1.2)}`

    const menu = cE("img", style)
    menu.src = "./assets/menu.png"
    menu.addEventListener(
        "click",
        function a(){document.getElementById("menu").style.left = "0%"}
    )
    return(menu)
}