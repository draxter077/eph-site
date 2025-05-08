import product from "../../../product/main.js"

export default function scroller(ps){
    let style = `
        {
            display:flex;
            flex-direction:column;
            flex-wrap:wrap;
            height:100%;
            overflow-x:scroll;
        }`

    const scroller = cE("div", style)
    for(let i = 0; i < ps.length; i++){
        scroller.appendChild(product(ps[i]))
    }
    return(scroller)
}