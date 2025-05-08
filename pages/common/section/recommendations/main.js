import scroller from "./scroller/main.js"

export default function recommendations(ps){
    let style = `
        {
            width:100%;
            height:550px;
            overflow:hidden;
        }
        :responsive{
            height:420px;
        }`

    const recommendations = cE("div", style)
    recommendations.appendChild(scroller(ps))
    return(recommendations)
}