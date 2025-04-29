export default function link(t, id){
    let style = `
        {
            position:relative;
            font-size:20px;
            color:var(--colorWhite);
            text-align:center;
            cursor:pointer;
        }
        :responsive{font-size:17px;}
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
        :hover::after{width:100%;}
        :responsive{order:2;}`

    const link = cE("div", style)
    link.innerHTML = t
    link.addEventListener(
        "click",
        function a(){
            if(t == "Todos os achados"){document.getElementById("catalog").style.left = "0%"}
            else{document.getElementById("helper").style.right = "0%"}
        }
    )
    return(link)
}