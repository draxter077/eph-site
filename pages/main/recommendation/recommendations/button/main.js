export default function button(){
    let style = `
        {
            font-size:15px;
            padding:5px 10px;
            margin:5px 0px 0px 0px;
            border-radius:5px;
            color:var(--colorWhite);
            background:var(--colorOrange);
            opacity:0;
            transition:all var(--transitionTime);
        }
        :hover{box-shadow:0px 0px 0px 2px var(--colorOrange);}
        :responsive{font-size:13px}`

    const button = cE("button", style)
    button.innerHTML = "Atualizar recomendações"
    return(button)
}