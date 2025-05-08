export default function link(t, url){
    let style = `
        {
            position:relative;
            font-size:22px;
            color:var(--colorWhite);
            padding:2px;
            cursor:pointer;
        }
        ::after{
            content:"";
            position:absolute;
            bottom:0%;
            left:0%;
            height:1px;
            width:0%;
            background:var(--colorWhite);
            transition:width var(--transitionTime);
        }
        :hover::after{
            width:100%;
        }
        :responsive{
            font-size:17px;
        }`

    const link = cE("div", style)
    link.innerHTML = t
    link.addEventListener(
        "click",
        function a(){window.open(url, "_self")}
    )
    return(link)
}