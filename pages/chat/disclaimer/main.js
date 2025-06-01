export default function disclaimer(){
    let style = `
        {
            width:100%;
            padding:5px;
            font-size:15px;
            background:var(--colorYellow);
            color:var(--colorBlack);
            text-align:center;
        }`

    const disclaimer = cE("div", style)
    disclaimer.innerHTML = "Esta funcionalidade está em fase de aprimoramento. Dê seu feedback em nossas redes sociais. Obrigado!"
    return(disclaimer)
}