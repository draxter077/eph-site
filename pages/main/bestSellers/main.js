export default function bestSellers(){
    let style = `
        {
            width:90%;
            height:150px;
            background:red;
        }`

    const bestSellers = cE("div", style)
    bestSellers.innerHTML = "Mais vendidos"
    return(bestSellers)
}