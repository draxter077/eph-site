import bot from "./bot/main.js"
import user from "./user/main.js"
import recommendations from "../../../common/section/recommendations/main.js"

export default function scroller(){
    let style = `
        {
            display:flex;
            flex-direction:column-reverse;
            width:100%;
        }`

    const scroller = cE("div", style)
    scroller.id = "botScroller"
    scroller.appendChild(recommendations([]))
    scroller.appendChild(bot(1))
    scroller.appendChild(user())
    scroller.appendChild(bot(0))

    window.addEventListener(
        "load",
        async function a(){
            let scrollerC = scroller.children
            await new Promise(resolve => setTimeout(resolve, 1000));
            scrollerC[3].style.maxHeight = "1000px" // Abre a mensagem normal do BOT, gerando cada palavra
            let ws = scrollerC[3].children[1].children
            for(let i = 0; i < ws.length; i ++){
                ws[i].style.opacity = 1
                await new Promise(resolve => setTimeout(resolve, 100))
            }
            await new Promise(resolve => setTimeout(resolve, 1000))
            scrollerC[2].style.maxHeight = "1000px" // Após, libera o input do usuário
        }
    )

    scroller.children[0].style.maxHeight = "0px" // Estilos no recomendações, já que uso o importado
    scroller.children[0].style.overflow = "hidden"
    scroller.children[0].style.transition = "max-height var(--transitionTime)"

    return(scroller)
}