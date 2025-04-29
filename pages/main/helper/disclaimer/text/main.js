export default function text(){
    let style = `
        {
            font-size:15px;
            overflow:hidden;
            padding:10px 20px;
            background:var(--colorOrange02);
            border-radius:10px;
        }
        :responsive{font-size:12px; max-width:90%; padding:5px 10px;}`

    const text = cE("div", style)
    text.innerHTML = "Comece adicionando algumas categorias que combinem com a pessoa! Depois é só clicar no botão abaixo para eu encontrar as melhores opções para presentes!"
    return(text)
}