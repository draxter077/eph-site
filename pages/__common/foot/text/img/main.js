export default function img(src, url, h){
    let style = `
        {
            height:35px;
            margin:0px 10px;
            cursor:pointer;
            transition:transform var(--transitionTime);
        }
        :hover{
            transform:scale(1.1)
        }
        :responsive{
            height:25px;
        }`
    
    const img = cE("img", style)
    img.src = src
    img.addEventListener("click", function a(){window.open(url, "_blank")})
    return(img)
}