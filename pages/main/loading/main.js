import img from "./img/main.js"

export default function loading(){
    let style = `
        {
            position:fixed;
            top:0%;
            left:0%;
            display:flex;
            justify-content:center;
            align-items:center;
            width:100%;
            height:100dvh;
            opacity:1;
            transition:opacity var(--transitionTime);
            background:var(--colorOrange);
        }`

    const loading = cE("div", style)
    loading.id = "loading"
    loading.appendChild(img())

    window.addEventListener(
        "load", 
        async function a(){
        loading.style.opacity = 0
        await new Promise(resolve => setTimeout(resolve, 500))
        loading.style.display="none"
        }
    )

    return(loading)
}