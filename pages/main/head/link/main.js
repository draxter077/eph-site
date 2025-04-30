export default function link(t, f){
    let style = `
        {
            position:relative;
            font-size:20px;
            color:var(--colorWhite);
            text-align:center;
            cursor:pointer;
        }
        :responsive{font-size:15px;order:2;}
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
        :hover::after{width:100%;}`

    const link = cE("div", style)
    link.innerHTML = t
    link.addEventListener(
        "click",
        f
    )
    return(link)
}