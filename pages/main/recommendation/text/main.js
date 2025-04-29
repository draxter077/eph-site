import word from "./word/main.js"

export default function text(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            width:90%;
            font-size:15px;
            overflow:hidden;
            padding:20px 30px;
            background:var(--colorOrange02);
            border-radius:10px;
            opacity:0;
            transition:opacity var(--transitionTime);
        }
        :responsive{font-size:12px; padding:10px 10px;}`

    const text = cE("div", style)
    let t = "Olá! Sou o Eph, seu assistente de compras online! Sou uma inteligência artificial feita para encontrar as melhores ofertas nos principais marketplaces do Brasil. Para começarmos, separei alguns produtos para você!"

    for(let i = 0; i < t.split(" ").length; i++){
        let ti = t.split(" ")[i]
        text.appendChild(word(ti))
    }

    window.addEventListener(
        "load",
        async function a(){
            await new Promise(resolve => setTimeout(resolve, 2000))
            let previousChar = ""

            for(let i = 0; i < text.children.length; i++){
                if(i > 0){text.children[i - 1].innerHTML = previousChar}
                text.children[i].style.opacity = 1
                previousChar = text.children[i].innerHTML

                if(i == text.children.length - 1){text.children[i].innerHTML = previousChar}
                await new Promise(resolve => setTimeout(resolve, 25))
            }
        },
        {once:true}
    )
    return(text)
}