import head from "./head/main.js"
import recommendations from "../../common/section/recommendations/main.js"

export default function search(pdts){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:95%;
            border-radius:15px 15px 0px 0px;
            border:2px solid var(--colorOrange);
            margin:30px;
        }`

    const search = cE("div", style)
    search.id = "categorySearch"
    search.appendChild(head())
    search.appendChild(recommendations(pdts))
    return(search)
}