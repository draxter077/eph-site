export default function head(){
    let style = `
        {
            width:100%;
        }`

    const head = cE("button", style)
    head.innerHTML = "X"
    head.addEventListener(
        "click",
        function a(){document.getElementById("menu").style.left = "-100%"}
    )
    return(head)
}