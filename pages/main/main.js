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
    main.appendChild(head())
    main.appendChild(menu())
    main.appendChild(section("🔥TOP 10", products))
    main.appendChild(section("😱Últimas unidades", products))
    main.appendChild(section("✨Recém adicionados", products))
    return(main)
}