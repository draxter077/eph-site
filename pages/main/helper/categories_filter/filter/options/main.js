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
            width:400%;
            max-width:0px;
            max-height:0px;
            overflow:hidden;
            background:var(--colorWhite);
            border-radius:5px;
            transition:all var(--transitionTime);
            z-index:5;
        }`

    const options = cE("div", style)
    let opts = ["Valor mínimo","Valor máximo"]
    for(let i = 0; i < opts.length; i++){options.appendChild(option(opts[i]))}
    return(options)
}