import item from "./item/main.js"
import products from "../../../../../products.js"

export default function items(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            flex-wrap:wrap;
            width:95%;
        }`

    const items = cE("div", style)

    window.addEventListener(
        "load",
        async function a(){
            let pLength = products.length
            let viewportWidth = window.innerWidth
            let n;

            if(viewportWidth > 1080){n = Math.floor(viewportWidth/170)*3}
            else{n = 12}

            for(let i = 0; i < n; i++){items.appendChild(item(products[Math.floor((pLength)*(Math.random()))]))}

            await new Promise(resolve => setTimeout(resolve, 1000))

            for(let i = 0; i < items.children.length; i++){
                items.children[i].style.opacity = 1;
                items.children[i].style.transform = "scale(1)"; 
                await new Promise(resolve => setTimeout(resolve, 100))
            }

            let btn = items.parentElement.children[1]
            btn.style.opacity = 1
            btn.addEventListener(
                "click",
                async function a(){
                    btn.style.opacity = 0
                    for(let i = items.children.length - 1; i >= 0; i--){
                        items.children[i].style.opacity = 0
                        await new Promise(resolve => setTimeout(resolve, 10))
                    }
                    await new Promise(resolve => setTimeout(resolve, 500))

                    for(let i = 0; i < items.children.length; i++){
                        items.replaceChild(item(products[Math.floor((pLength)*(Math.random()))]), items.children[i])
                    }
                    await new Promise(resolve => setTimeout(resolve, 50))

                    for(let i = 0; i < items.children.length; i++){
                        items.children[i].style.opacity = 1;
                        items.children[i].style.transform = "scale(1)"; 
                        await new Promise(resolve => setTimeout(resolve, 100))
                    }
                    btn.style.opacity = 1
                }
            )
        },
        {once:true}
    )

    return(items)
}