import head from "./head/main.js"
import disclaimer from "./disclaimer/main.js"
import categories_filter from "./categories_filter/main.js"
import recommendations from "./recommendations/main.js"

export default function helper(){
    let style = `
        {
            position:fixed;
            z-index:2;
            top:0%;
            left:-100%;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            height:calc(100dvh - 20px);
            width:calc(100% - 20px);
            overflow:hidden;
            background:var(--colorOrange);
            transition:left var(--transitionTime);
            margin:10px;
            box-shadow:0px 0px 10px 0px var(--colorBlack);
            border-radius:15px;
        }
        :responsive{
            height:calc(100dvh - 10px);
            width:calc(100% - 10px);
            margin:5px;
        }`

    const helper = cE("div", style)
    helper.id = "helper"
    helper.appendChild(head())
    helper.appendChild(disclaimer())
    helper.appendChild(categories_filter())
    helper.appendChild(recommendations())
    return(helper)
}