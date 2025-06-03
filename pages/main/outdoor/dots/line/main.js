import dot from "./dot/main.js"

export default function line(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            width:50%;
            padding:5px;
        }`
    
    const line = cE("div", style)
    let l = 4
    for(let i = 0; i < l; i++){line.appendChild(dot())}
    window.addEventListener(
        "load",
        async function a(){
            let i = 0;
            line.children[i].style.background = "var(--colorOrange)"
            while(true){
                await new Promise(resolve => setTimeout(resolve, 4000))
                if(i == l-1){
                    i = 0
                    line.children[l-1].style.background = "var(--colorWhite)"
                    line.children[0].style.background = "var(--colorOrange)"
                }
                else{
                    i += 1
                    line.children[i-1].style.background = "var(--colorWhite)"
                    line.children[i].style.background = "var(--colorOrange)"
                }
            }
        }
    )
    return(line)
}