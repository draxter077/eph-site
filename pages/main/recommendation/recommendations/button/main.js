export default function button(){
    let style = `
        {
            font-size:15px;
            padding:5px 10px;
            border-radius:5px;
            color:var(--colorOrange);
            opacity:0;
            transition:all var(--transitionTime);
        }
        :hover{background:var(--colorOrange); color:var(--colorWhite)}
        :responsive{font-size:13px}`

    const button = cE("button", style)
    button.innerHTML = "Atualizar recomendações"
    return(button)
}