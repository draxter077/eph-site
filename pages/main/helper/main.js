import head from "./head/main.js"
import disclaimer from "./disclaimer/main.js"
import categories from "./categories/main.js"
import recommendations from "./recommendations/main.js"

export default function helper(){
    let style = `
        {
            position:fixed;
            z-index:2;
            top:0%;
            right:-100%;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            height:100dvh;
            width:100%;
            overflow:hidden;
            background:var(--colorWhite);
            transition:right var(--transitionTime);
        }`

    const helper = cE("div", style)
    helper.id = "helper"
    helper.appendChild(head())
    helper.appendChild(disclaimer())
    helper.appendChild(categories())
    helper.appendChild(recommendations())
    return(helper)
}