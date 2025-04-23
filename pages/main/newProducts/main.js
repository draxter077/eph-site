export default function newProducts(){
    let style = `
        {
            width:90%;
            height:150px;
            background:blue;
        }`

    const newProducts = cE("div", style)
    newProducts.innerHTML = "Novos produtos"
    return(newProducts)
}