export default function disclaimer(){
    let style = `
        {
            font-size:12px;
            color:var(--colorBlack);
            width:100%;
            text-align:right;
        }
        :responsive{
            font-size:10px;
        }`

    const disclaimer = cE("div", style)
    disclaimer.innerHTML = "Devido ao tempo de atualização de nossos servidores, pode haver uma pequena diferença no preço"
    return(disclaimer)
}