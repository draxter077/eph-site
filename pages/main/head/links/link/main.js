export default function link(t, f){
    let style = `
        {
            position:relative;
            font-size:calc(0.7*var(--titleFontSize));
            color:var(--colorWhite);
            margin:10px 40px;
            font-weight:600;
            cursor:pointer;
        }
        ::after{
            position:absolute;
            content:"";
            bottom:0%;
            left:0%;
            width:0%;
            height:1px;
            background:var(--colorWhite);
            transition:width var(--transitionTime);
        }
        :hover::after{width:100%;}
        :responsive{
            font-size:calc(0.5*var(--titleFontSize));
            margin:10px;
        }`

    const link = cE("div", style)
    link.innerHTML = t
    link.addEventListener("click", function a(){document.getElementById(f).scrollIntoView({behavior:"smooth"})})
    return(link)
}