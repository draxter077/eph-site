import products from "../../../../../../products.js"

export default function category(t){
    let style = `
        {
            font-size:17px;
            color:var(--colorWhite);
            margin:0px 5px 0px 0px;
            padding:5px 10px;
            border-radius:5px;
            text-wrap:nowrap;
            cursor:pointer;
            background:var(--colorOrange);
            transition:all var(--transitionTime);
        }
        :responsive{font-size:14px;}`

    const category = cE("div", style)
    category.innerHTML = t
    
    category.addEventListener(
        "click",
        function a(e){
            let currentBG = e.target.style.background
            let items = e.target.parentElement.parentElement.parentElement.children[3].children
            let categs = e.target.parentElement.children
            let input = e.target.parentElement.parentElement.parentElement.children[1].children[1]
            input.value = ""
            if(currentBG == "var(--colorWhite)"){
                e.target.style.background = "var(--colorOrange)"
                e.target.style.color = "var(--colorWhite)"
                for(let i = 0; i < items.length; i++){items[i].style.display = "flex";items[i].style.scale = 1}
            }
            else{
                for(let i = 0; i < categs.length; i++){
                    categs[i].style.background = "var(--colorOrange)"
                    categs[i].style.color = "var(--colorWhite)"
                }
                e.target.style.background = "var(--colorWhite)"
                e.target.style.color = "var(--colorOrange)"
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