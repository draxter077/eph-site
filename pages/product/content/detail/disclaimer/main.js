export default function disclaimer(){
    let style = `
        {
            font-size:12px;
            color:var(--colorBlack);
        }`

    const disclaimer = cE("div", style)
    disclaimer.innerHTML = "*Devido ao tempo de atualização de nossos servidores, pode haver uma pequena diferença de preço"
    return(disclaimer)
}