export default function text(){
    let style = `
        {
            font-size:15px;
            overflow:hidden;
            padding:10px 20px;
            background:var(--colorWhite);
            border-radius:10px;
        }
        :responsive{font-size:12px; max-width:90%; padding:5px 10px;}`

    const text = cE("div", style)
    text.innerHTML = "Em dúvida sobre o que comprar? Selecione alguns filtros abaixo, e vou te ajudar a encontrar a melhor oferta!"
    return(text)
}