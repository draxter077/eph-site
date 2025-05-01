import head from "./head/main.js"
import recommendation from "./recommendation/main.js"
import section from "./section/main.js"
import foot from "./foot/main.js"

import catalog from "./catalog/main.js"
import helper from "./helper/main.js"

import loading from "./loading/main.js"

import products from "../../products.js"

function sortProducts(productArray, elements){
    let newArray = []
    for(let i = 0; i < elements.length; i++){newArray.push(productArray[elements[i]])}
    return(newArray)
}

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }`

    const main = cE("div", style)
    main.appendChild(head())
    main.appendChild(recommendation())
    main.appendChild(section("Novas ofertas", sortProducts(products, [0,1,2,3]), "seen"))

    let pbs = [...products]
    let bestSellers = pbs.sort((a, b) => Number((a.sells).replaceAll("+", "").replaceAll("mil","000").replaceAll(",",".")) - Number((b.sells).replaceAll("+", "").replaceAll("mil","000").replaceAll(",",".")))
    bestSellers.reverse().splice(50, bestSellers.length - 50)
    main.appendChild(section("Mais vendidos", bestSellers, "sells"))

    let pbc = [...products]
    let bestComissions = pbc.sort((a, b) => Number((a.comission).replaceAll(",",".")) - Number((b.comission).replaceAll(",",".")))
    bestComissions.reverse().splice(20, bestComissions.length - 20)
    main.appendChild(section("Está acabando... mas ainda dá tempo de comprar!", bestComissions, "seen"))

    main.appendChild(foot())
    main.appendChild(catalog())
    main.appendChild(helper())
    main.appendChild(loading())

    window.addEventListener(
        "load",
        async function a(){
            main.children[0].style.opacity = 1
            main.children[1].style.opacity = 1
            main.children[2].style.opacity = 1
            main.children[3].style.opacity = 1
            main.children[4].style.opacity = 1
        }
    )
    return(main)
}