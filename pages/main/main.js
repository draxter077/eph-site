import head from "./head/main.js"
import menu from "./menu/main.js"
import section from "./section/main.js"
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
    main.appendChild(menu())
    main.appendChild(section("🔥TOP 10", sortProducts(products, [0,1,2,3,4,5,6,7,8,9])))
    main.appendChild(section("😱Últimas unidades", sortProducts(products, [1,2,3,4,5,6,7,8])))
    main.appendChild(section("✨Recém adicionados", sortProducts(products, [1,2,3,4,5,6,7,8,9,10])))
    return(main)
}