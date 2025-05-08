import scroller from "./scroller/main.js"

export default function recommendations(){
    let style = `
        {
            width:100%;
            height:400px;
            max-height:0px;
            overflow-y:scroll;
            transition:all var(--transitionTime);
        }`

    const recommendations = cE("div", style)
     recommendations.appendChild(scroller())
    return(recommendations)
}