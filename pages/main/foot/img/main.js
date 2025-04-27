export default function img(src, x, x2, url){
    let style = `
        {
            height:calc(${x}*var(--titleFontSize));
            margin:10px 5px;
            ${url != undefined ? "cursor:pointer;transition:transform var(--transitionTime);" : ""}
        }
        :responsive{height:calc(${x2}*var(--titleFontSize))}
        ${url != undefined ? ":hover{transform:scale(1.1);}" : ""}`

    const img = cE("img", style)
    img.src = src
    if(url != undefined){img.addEventListener("click", function a(){window.open(url, "_blank")})}
    return(img)
}