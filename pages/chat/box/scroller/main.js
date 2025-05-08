import bot from "./bot/main.js"
import user from "./user/main.js"
import recommendations from "./recommendations/main.js"

export default function scroller(){
    let style = `
        {
            display:flex;
            flex-direction:column-reverse;
            width:100%;
        }`

    const scroller = cE("div", style)
    scroller.id = "botScroller"
    scroller.appendChild(recommendations())
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
            await new Promise(resolve => setTimeout(resolve, 1000));
            scrollerC[3].style.maxHeight = "1000px"
            await new Promise(resolve => setTimeout(resolve, 1000));
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

    return(scroller)
}