export default function text(type){
    let style = `
        {
            font-size:18px;
            padding:10px 15px;
            background:var(--colorOrange02);
            border-radius:10px;
            text-align:justify;
        }
        :responsive{
            font-size:15px;
            text-align:left;    
        }`

    const text = cE("div", style)
    if(type == 0){
        text.innerHTML = `Olá, tudo bem? Esse é o texto inicial, para te dizer como funciona e te pedir para selecionar o evento`
    }
    else if(type == 1){
        text.innerHTML = "Aqui você já selecionou o evento, eu te parabenizo, e te peço para avaliar as subcategorias que encontrei"
    }
    else if(type == 2){
        text.innerHTML = "Agora te pergunto somente o valor máximo e mínimo"
    }
    else if(type == 3){
        text.innerHTML = "Agora eu falo que estou pensando e te envio as recomendações"
    }
    return(text)
}