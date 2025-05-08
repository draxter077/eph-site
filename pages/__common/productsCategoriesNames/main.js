import products from "../../../products.js"

export default function productsCategoriesNames(){
    let ctgs = []
    for(let i = 0; i < products.length; i++){
        let cat = products[i].category
        if(!ctgs.includes(cat)){ctgs.push(cat)}
    }
    return(ctgs)
}