import head from "./head/main.js"
import disclaimer from "./disclaimer/main.js"
import section from "./section/main.js"
import catalog from "./catalog/main.js"
import foot from "./foot/main.js"
import products from "./products.js"

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            height:fit-content;
        }`

    const main = cE("div", style)
    function sortProducts(productArray, elements){
        let newArray = []
        for(let i = 0; i < elements.length; i++){newArray.push(productArray[elements[i]])}
        return(newArray)
    }
    main.appendChild(head())
    main.appendChild(disclaimer())
    main.appendChild(section("🔥 TOP 10", sortProducts(products, [0,1,14,11,8,5,19,10,6,18])))
    main.appendChild(section("😱 Últimas unidades", sortProducts(products, [11,10,12,20,16])))
    main.appendChild(section("✨ Recém adicionados", sortProducts(products, [1,0,11])))
    main.appendChild(catalog())
    main.appendChild(foot())
    window.addEventListener(
        "load",
        async function a(){
            main.children[0].style.opacity = 1
            main.children[2].style.opacity = 1
            main.children[3].style.opacity = 1
            main.children[4].style.opacity = 1
            main.children[5].style.opacity = 1
            await new Promise(resolve => setTimeout(resolve, 1000))
            main.children[1].style.opacity = 1
            main.children[1].children[0].style.maxWidth = "1000px"
            await new Promise(resolve => setTimeout(resolve, 300))
            main.children[1].children[0].style.maxHeight = "1000px"
        },
        {once:true}
    )
    return(main)
}