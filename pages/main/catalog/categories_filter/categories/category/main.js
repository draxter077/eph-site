import products from "../../../../../../products.js"

export default function category(t){
    let style = `
        {
            position:relative;
            font-size:17px;
            color:var(--colorWhite);
            margin:0px 15px 0px 0px;
            font-weight:400;
            text-wrap:nowrap;
            cursor:pointer;
        }
        :responsive{font-size:14px;}
        ::after{
            content:"";
            position:absolute;
            bottom:0%;
            left:0%;
            width:0%;
            height:1px;
            background:var(--colorWhite);
            transition:width var(--transitionTime);
        }
        :hover::after{width:100%;}`

    const category = cE("div", style)
    category.innerHTML = t
    
    category.addEventListener(
        "click",
        function a(e){
            let currentFW = e.target.style.fontWeight
            let items = e.target.parentElement.parentElement.parentElement.children[3].children
            let categs = e.target.parentElement.children
            let input = e.target.parentElement.parentElement.parentElement.children[1].children[1]
            input.value = ""
            if(currentFW == 600){
                e.target.style.fontWeight = 400;
                for(let i = 0; i < items.length; i++){items[i].style.display = "flex";items[i].style.scale = 1}
            }
            else{
                for(let i = 0; i < categs.length; i++){categs[i].style.fontWeight = 400}
                e.target.style.fontWeight = 600;
                for(let i = 0; i < items.length; i++){
                    if(products[items[i].id].category.toLowerCase() != t.toLowerCase()){ // Usa-se o valor espelhado porque o conteúdo é adicionado à página em sentido contrário
                        items[items.length - 1 - i].style.display = "none"
                        items[items.length - 1 - i].style.scale = 0
                    }
                    else{items[items.length - 1 - i].style.display = "flex";items[items.length - 1 - i].style.scale = 1}
                }
            }
        }
    )
    return(category)
}