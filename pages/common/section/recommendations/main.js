import scroller from "./scroller/main.js"

export default function recommendations(ps){
    let style = `
        {
            width:100%;
            height:780px;
        }
        :responsive{
            height:600px;
        }`

    const recommendations = cE("div", style)
    recommendations.appendChild(scroller(ps))
    return(recommendations)
}