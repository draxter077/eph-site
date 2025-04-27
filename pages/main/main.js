import head from "./head/main.js"
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
    main.appendChild(section("🔥 TOP 50", sortProducts(products, [])))
    main.appendChild(section("😱 Últimas unidades", sortProducts(products, [])))
    main.appendChild(section("✨ Recém adicionados", sortProducts(products, [])))
    main.appendChild(catalog())
    main.appendChild(foot())
    return(main)
}