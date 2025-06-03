import head from '../common/head/main.js'
import ai from "./ai/main.js"
import brands from "./brands/main.js"
import contact from "./contact/main.js"
import foot from "../common/foot/main.js"

export default function about(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-between;
            width:100%;
            height:100dvh;
        }`

    const about = cE("div", style)
    about.appendChild(head({t:"Chat",url:"/chat"},{t:"Feed",url:"/feed"}))
    about.appendChild(ai())
    about.appendChild(brands())
    about.appendChild(contact())
    about.appendChild(foot())
    return(about)
}