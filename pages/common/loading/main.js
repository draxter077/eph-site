import logo from "./logo/main.js"
import text from "./text/main.js"

export default function loading(){
    let style = `
        {
            position:fixed;
            top:0%;
            left:0%;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            width:100%;
            height:100dvh;
            background:var(--colorOrange);
            transition:opacity var(--transitionTime);
            z-index:5;
        }`

    const loading = cE("div", style)
    loading.appendChild(logo())
    loading.appendChild(text())
    window.addEventListener(
        "load",
        async function a(){
            loading.style.opacity = 0
            await new Promise(resolve => setTimeout(resolve, 550));
            loading.style.height = "0px"
            loading.style.width = "0px"
            loading.parentElement.removeChild(loading)
        }
    )
    return(loading)
}