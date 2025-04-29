import item from "../items/item/main.js"
import products from "../../../../../products.js"

export default function button(){
    let style = `
        {
            font-size:15px;
            padding:5px 10px;
            border-radius:5px;
            color:var(--colorOrange);
            transition:all var(--transitionTime);
        }
        :hover{background:var(--colorOrange); color:var(--colorWhite)}
        :responsive{font-size:13px}`

    const button = cE("button", style)
    button.innerHTML = "Atualizar recomendações"

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

            let categs = button.parentElement.parentElement.children[2].children
            let selecCategs = []
            for(let i = 0; i < categs.length; i++){
                if(categs[i].style.fontWeight == 600){selecCategs.push(categs[i].innerHTML)}
            }

            let selecProducts = []
            for(let i = 0; i < products.length; i++){
                if(selecCategs.includes(products[i].category)){selecProducts.push(products[i])}
            }
            
            console.log(selecCategs)
            console.log(selecProducts)
            for(let i = 0; i < (selecProducts.length)/2 + 1; i++){items.appendChild(item(selecProducts[Math.floor((selecProducts.length)*(Math.random()))]))}
            for(let i = 0; i < items.children.length; i++){
                items.children[i].style.opacity = 1
                items.children[i].style.transform = "scale(1)"
                await new Promise(resolve => setTimeout(resolve, 100))
            }
        }
    )
    return(button)
}