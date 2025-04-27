import letter from "./letter/main.js"

export default function text(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            width:65%;
            font-size:calc(0.65*var(--titleFontSize));
            overflow:hidden;
            padding:10px 20px;
            background:var(--colorOrange02);
            border-radius:10px 10px 0px 10px;
            margin:10px 0px 0px 0px;
        }
        :responsive{font-size:calc(0.5*var(--titleFontSize))}`

    const text = cE("div", style)
    let t = "Olá!⠀Sou⠀o⠀Eph,⠀seu⠀assistente⠀de⠀compras⠀online!⠀Vasculho⠀os⠀maiores⠀marketplaces⠀24h⠀por⠀dia⠀para⠀trazer⠀as⠀melhores⠀ofertas⠀com⠀os⠀melhores⠀preços!⠀Minha⠀inteligência⠀artificial⠀seleciona⠀promoções⠀imperdíveis⠀em⠀todas⠀as⠀categorias,⠀atualizando⠀nossas⠀opções⠀diariamente.⠀Aqui⠀você⠀encontra⠀todos⠀os⠀meus⠀achados!⠀Aproveite!"
    for(let i = 0; i < t.length; i++){text.appendChild(letter(t[i]))}
    window.addEventListener(
        "load",
        async function a(){
            await new Promise(resolve => setTimeout(resolve, 3000))
            let previousChar = ""
            for(let i = 0; i < text.children.length; i++){
                if(i > 0){text.children[i - 1].innerHTML = previousChar}
                text.children[i].style.opacity = 1
                previousChar = text.children[i].innerHTML
                text.children[i].innerHTML = "_"
                if(i == text.children.length - 1){text.children[i].innerHTML = previousChar}
                await new Promise(resolve => setTimeout(resolve, 25))
            }
        },
        {once:true}
    )
    return(text)
}