import subcategory from "./subcategory/main.js"

export default function subcategories(scs){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            flex-wrap:wrap;
            width:90%;
        }
        :responsive{
            justify-content:flex-start;
            width:95%;
        }`

    const subcategories = cE("div", style)
    for(let i = 0; i < scs.length; i++){subcategories.appendChild(subcategory(scs[i]))}
    return(subcategories)
}