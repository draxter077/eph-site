import product from "../../../../__common/product/main.js"

export default function scroller(pdts){
    let style = `
        {
            display:flex;
            flex-direction:row;
            flex-wrap:no-wrap;
        }`

    const scroller = cE("div", style)
    for(let i = 0; i < pdts.length; i++){
        scroller.appendChild(product(pdts[i]))
    }
    return(scroller)
}