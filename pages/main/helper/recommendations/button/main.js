import item from "../items/item/main.js"
import products from "../../../../../products.js"

export default function button(){
    let style = `
        {
            font-size:15px;
            padding:5px 10px;
            margin:10px 0px;
            border-radius:5px;
            color:var(--colorWhite);
            background:var(--colorOrange);
            transition:box-shadow var(--transitionTime);
        }
        :hover{box-shadow:0px 0px 0px 2px var(--colorOrange);}
        :responsive{font-size:13px}`

    const button = cE("button", style)
    button.innerHTML = "Gerar recomendações"

    button.addEventListener(
        "click",
        async function a(){
            let items = button.parentElement.parentElement.children[3].children[1]
            for(let i = items.children.length - 1; i >= 0; i--){
                items.children[i].style.opacity = 0
                await new Promise(resolve => setTimeout(resolve, 10))
            }
            await new Promise(resolve => setTimeout(resolve, 500))
            items.innerHTML = ""

            let categs = button.parentElement.parentElement.children[2].children[0].children
            let selecCategs = []
            for(let i = 0; i < categs.length; i++){
                if(categs[i].style.fontWeight == 600){selecCategs.push(categs[i].innerHTML)}
            }

            let selecProducts = []
            if(selecCategs.length == 0){selecProducts = products}
            else{
                for(let i = 0; i < products.length; i++){
                    if(selecCategs.includes(products[i].category)){selecProducts.push(products[i])}
                }
            }
            
            for(let i = 0; i < (selecProducts.length)/3 + 1; i++){items.appendChild(item(selecProducts[Math.floor((selecProducts.length)*(Math.random()))]))}
            for(let i = 0; i < items.children.length; i++){
                items.children[i].style.opacity = 1
                items.children[i].style.transform = "scale(1)"
                await new Promise(resolve => setTimeout(resolve, 100))
            }
        }
    )
    return(button)
}