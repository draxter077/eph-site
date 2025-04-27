import title from "./title/main.js"
import items from "./items/main.js"
import ad from "./ad/main.js"

export default function section(t, products){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
            opacity:0;
            transition:opacity var(--transitionTime);
        }`

    const section = cE("div", style)
    section.id = t
    section.appendChild(title(t))
    section.appendChild(items(products))
    //section.appendChild(ad())
    return(section)
}