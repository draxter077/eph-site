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
        text.innerHTML = `Olá, tudo bem? Eu sou o GiphBot e vou te ajudar a encontrar o melhor produto para você! Para começarmos, essa compra é para um momento especial?`
    }
    else if(type == 1){
        text.innerHTML = "Aqui você já selecionou o evento, eu te parabenizo, e te peço para avaliar as subcategorias que encontrei"
    }
    else if(type == 2){
        text.innerHTML = "Agora te pergunto somente o valor máximo e mínimo"
    }
    else if(type == 3){
        text.innerHTML = "Ótimo! Aguarde só um segundinho enquanto encontro os melhores produtos para esse momento!"
    }
    return(text)
}