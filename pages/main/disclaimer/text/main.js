import letter from "./letter/main.js"

export default function text(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            width:70%;
            max-width:0px;
            max-height:0px;
            overflow:hidden;
            padding:10px;
            border:1px solid var(--colorOrange);
            border-radius:10px;
            margin:10px 0px 0px 0px;
            transition:max-height var(--transitionTime), max-width var(--transitionTime);
        }`

    const text = cE("div", style)
    let t = "asd⠀asiw⠀ljfn⠀asdfj⠀euwert⠀sd,gs⠀ldfjkn⠀slckjvn⠀sdiuw⠀elirvnl⠀jvn⠀lkjnv⠀svasd⠀asiw⠀ljfn⠀asdfj⠀euwert⠀sd,gs⠀ldfjkn⠀slckjvn⠀sdiuw⠀elirvnl⠀jvn⠀lkjnv⠀svasd⠀asiw⠀ljfn⠀asdfj⠀euwert⠀sd,gs⠀ldfjkn⠀slckjvn⠀sdiuw⠀elirvnl⠀jvn⠀lkjnv⠀sv."
    for(let i = 0; i < t.length; i++){text.appendChild(letter(t[i]))}
    window.addEventListener(
        "load",
        async function a(){
            await new Promise(resolve => setTimeout(resolve, 2000))
            for(let i = 0; i < text.children.length; i++){
                text.children[i].style.opacity = 1
                await new Promise(resolve => setTimeout(resolve, 25))
            }
        },
        {once:true}
    )
    return(text)
}