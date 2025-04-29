export default function catalog(){
    let style = `
        {
            position:fixed;
            z-index:2;
            top:0%;
            left:-100%;
            height:100%;
            width:100%;
            background:var(--colorWhite);
            transition:left var(--transitionTime);
        }`

    const catalog = cE("div", style)
    catalog.id = "catalog"
    catalog.addEventListener(
        "click",
        function a(){
            catalog.style.left = "-100%"
        }
    )
    return(catalog)
}