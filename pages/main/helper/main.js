export default function helper(){
    let style = `
        {
            position:fixed;
            z-index:2;
            top:0%;
            right:-100%;
            height:100%;
            width:100%;
            background:var(--colorWhite);
            transition:right var(--transitionTime);
        }`

    const helper = cE("div", style)
    helper.id = "helper"
    helper.addEventListener(
        "click",
        function a(){
            helper.style.right = "-100%"
        }
    )
    return(helper)
}