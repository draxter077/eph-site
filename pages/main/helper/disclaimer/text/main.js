export default function text(){
    let style = `
        {
            font-size:15px;
            overflow:hidden;
            padding:10px 20px;
            background:var(--colorOrange02);
            border-radius:10px;
        }
        :responsive{font-size:14px; max-width:90%; padding:5px 10px;}`

    const text = cE("div", style)
    text.innerHTML = "Vou te ajudar! Comece adicionando algumas categorias que ache relevante. O resto eu faço!"
    return(text)
}