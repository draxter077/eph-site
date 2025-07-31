import word from "./word/main.js"

function hello(){
    let hs = ["Olá, tudo bem?", "Oi, tudo bem?", "Oi!", "Olá!"]
    return(hs[Math.floor(hs.length*Math.random())])
}

function interjection(){
    let is = ["Ótimo", "Entendi", "Maravilha", "Perfeito"]
    return(is[Math.floor(is.length*Math.random())])
}

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
        t = `${hello()} Sou o Giph, a inteligência artificial que encontra as melhores ofertas nos principais marketplaces do Brasil. Como posso te ajudar?`
    }
    else if(type == 1){
        t = `${interjection()}! Já tenho alguns produtos em mente. Aguarde só um instante enquanto trago eles aqui para você...`
    }

    let ts = t.split(" ")
    for(let i = 0; i < ts.length; i++){
        text.appendChild(word(ts[i]))
    }
    return(text)
}