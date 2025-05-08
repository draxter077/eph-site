import word from "./word/main.js"

export default function text(type){
    let style = `
        {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            padding:10px 15px;
            background:var(--colorOrange02);
            border-radius:10px;
        }`

    const text = cE("div", style)
    let t
    if(type == 0){
        t = `Olá, tudo bem? Eu sou o GiphBot, o mesmo que encontra as melhores ofertas nos principais marketplaces do Brasil... Mas, no meu tempo livre, fico aqui para ajudar a encontrar os produtos certos para cada desejo. Dito isso, vamos começar! Como posso te ajudar?`
    }
    else if(type == 1){
        t = "Aqui você já selecionou o evento, eu te parabenizo, e te peço para avaliar as subcategorias que encontrei"
    }
    else if(type == 2){
        t = "Agora te pergunto somente o valor máximo e mínimo"
    }
    else if(type == 3){
        t = "Ótimo! Já tenho algumas ofertas em mente. Aguarde só um segundinho..."
    }

    let ts = t.split(" ")
    for(let i = 0; i < ts.length; i++){
        text.appendChild(word(ts[i]))
    }
    return(text)
}