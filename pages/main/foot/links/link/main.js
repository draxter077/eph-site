export default function link(src, url){
    let style = `
        {
            width:30px;
            margin:0px 0px 0px 20px;
            cursor:pointer;
            transition:transform var(--transitionTime);
        }
        :hover{transform:scale(1.2)}`

    const link = cE("img", style)
    link.src = `./assets/${src}.png`
    link.addEventListener("click", function a(){window.open(url, "_blank")})
    return(link)
}