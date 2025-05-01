import option from "./option/main.js"

export default function options(){
    let style = `
        {
            position:absolute;
            top:0%;
            right:0%;
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            max-width:0px;
            max-height:0px;
            overflow:hidden;
            background:var(--colorWhite);
            border-radius:5px;
            transition:all var(--transitionTime);
            z-index:5;
        }`

    const options = cE("div", style)
    let opts = [["./assets/arrow-up.png", 0],["./assets/arrow-down.png", 1]]
    for(let i = 0; i < opts.length; i++){options.appendChild(option(opts[i][0], opts[i][1]))}
    options.addEventListener("click", function a(){options.style.maxWidth = "0px";options.style.maxHeight = "0px"})
    return(options)
}