export default function img(src, url){
    let style = `
        {
            height:35px;
            margin:0px 0px 0px 10px;
            cursor:pointer;
            transition:transform var(--transitionTime);
        }
        :hover{transform:scale(1.2)}`

    const img = cE("img", style)
    img.src = src
    img.addEventListener("click", function a(){window.open(url, "_blank")})
    return(img)
}