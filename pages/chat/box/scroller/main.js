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
    scroller.appendChild(bot(3))
    //scroller.appendChild(user(2))
    //scroller.appendChild(bot(2))
    //scroller.appendChild(user(1))
    //scroller.appendChild(bot(1))
    scroller.appendChild(user(0))
    scroller.appendChild(bot(0))

    window.addEventListener(
        "load",
        async function a(){
            let scrollerC = scroller.children
            await new Promise(resolve => setTimeout(resolve, 2000));
            scrollerC[3].style.maxHeight = "1000px"
            let ws = scrollerC[3].children[1].children
            for(let i = 0; i < ws.length; i ++){
                ws[i].style.opacity = 1
                await new Promise(resolve => setTimeout(resolve, 100))
            }
            await new Promise(resolve => setTimeout(resolve, 1000))
            scrollerC[2].style.maxHeight = "1000px"
            //await new Promise(resolve => setTimeout(resolve, 1000));
            //scrollerC[5].style.maxHeight = "1000px"
            //await new Promise(resolve => setTimeout(resolve, 1000));
            //scrollerC[4].style.maxHeight = "1000px"
            //await new Promise(resolve => setTimeout(resolve, 1000));
            //scrollerC[3].style.maxHeight = "1000px"
            //await new Promise(resolve => setTimeout(resolve, 1000));
            //scrollerC[2].style.maxHeight = "1000px"
            //await new Promise(resolve => setTimeout(resolve, 1000));
            //scrollerC[1].style.maxHeight = "1000px"
            //await new Promise(resolve => setTimeout(resolve, 1000));
            //scrollerC[0].style.maxHeight = "1000px"
        }
    )

    scroller.children[0].style.maxHeight = "0px"
    scroller.children[0].style.overflow = "hidden"
    scroller.children[0].style.transition = "max-height var(--transitionTime)"
    return(scroller)
}