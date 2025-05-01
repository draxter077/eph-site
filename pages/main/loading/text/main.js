export default function text(){
    let style = `
        {
            width:90%;
            color:var(--colorWhite);
            font-size:35px;
            margin:40px 0px 0px 0px;
            text-align:center;
        }`

    const text = cE("div", style)
    text.innerHTML = "Aguarde só um pouquinho! Estamos nos preparando para receber você!"
    return(text)
}