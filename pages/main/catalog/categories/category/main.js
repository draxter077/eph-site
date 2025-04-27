export default function category(t){
    let style = `
        {
            position:relative;
            font-size:calc(0.65*var(--titleFontSize));
            color:var(--colorOrange);
            margin:5px 15px 0px 0px;
            padding:0px 0px 2px 0px;
            font-weight:400;
            cursor:pointer;
        }
        ::after{
            content:"";
            position:absolute;
            bottom:0%;
            left:0%;
            width:0%;
            height:1px;
            background:var(--colorOrange);
            transition:width var(--transitionTime);
        }
        :hover::after{width:100%;}`

    const category = cE("div", style)
    category.innerHTML = t
    category.addEventListener(
        "click",
        function a(e){
            let currentFW = e.target.style.fontWeight
            let items = e.target.parentElement.parentElement.children[3].children
            let categs = e.target.parentElement.children
            let input = e.target.parentElement.parentElement.children[1].children[0]
            input.value = ""
            if(currentFW == 600){
                e.target.style.fontWeight = 400;
                for(let i = 0; i < items.length; i++){items[i].style.display = "flex";items[i].style.scale = 1}
            }
            else{
                for(let i = 0; i < categs.length; i++){categs[i].style.fontWeight = 400}
                e.target.style.fontWeight = 600;
                for(let i = 0; i < items.length; i++){
                    let optionsText = "";
                    for(let k = items[i].id.length - t.length; k < items[i].id.length; k++){
                        optionsText += items[i].id[k]
                    }
                    if(optionsText.toLowerCase() != t.toLowerCase()){
                        items[i].style.display = "none"
                        items[i].style.scale = 0
                    }
                    else{items[i].style.display = "flex";items[i].style.scale = 1}
                }
            }
        }
    )
    return(category)
}