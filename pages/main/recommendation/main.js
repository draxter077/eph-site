import recommendations from "./recommendations/main.js"

export default function recommendation(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }`

    const recommendation = cE("div", style)
    recommendation.appendChild(recommendations())
    return(recommendation)
}