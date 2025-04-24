export default function menu(){
    let style = `
        {
            height:calc(1.2*var(--titleFontSize));
            transition:transform var(--transitionTime);
            cursor:pointer;
        }
        :responsive{height:calc(1*var(--titleFontSize))}
        :hover{transform:scale(1.1) rotate(-180deg)}`

    const menu = cE("img", style)
    menu.src = "./assets/menu.png"
    menu.addEventListener(
        "click",
        function a(){document.getElementById("menu").style.left = "0%"}
    )
    return(menu)
}