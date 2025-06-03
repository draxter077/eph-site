import product from "../../../common/product/main.js"
import products from "../../../../products.js"

export default function scroller(){
    let style  = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            flex-wrap:wrap;
            width:100%;
        }
        :responsive{
            justify-content:center;
        }`
    
    const scroller = cE("div", style)
    let pdtsR = []
    while(true){
        let rId = Math.floor(products.length*Math.random())
        let p = products[rId]
        if(!pdtsR.includes(p)){
            pdtsR.push(p)
        }
        if(pdtsR.length == products.length){break}
    }
    for(let i = 0; i < pdtsR.length; i++){
        scroller.appendChild(product(pdtsR[i]))
    }
    return(scroller)
}