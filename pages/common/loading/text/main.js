export default function text(){
    let style = `
        {
            font-size:28px;
            color:var(--colorWhite);
            width:90%;
            text-align:center;
            margin:40px 0px 0px 0px;
        }
        :responsive{
            font-size:20px;
        }`

    const text = cE("div", style)
    text.innerHTML = "Aguarde só um pouquinho! Estamos organizando tudo para receber você!"
    return(text)
}