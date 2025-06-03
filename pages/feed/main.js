import head from "../common/head/main.js"
import content from "./content/main.js"
import foot from "../common/foot/main.js"

import loading from "../common/loading/main.js"

export default function feed(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-between;
            height:100dvh;
            width:100%;
        }`

    const feed = cE("div", style)
    feed.appendChild(loading())
    feed.appendChild(head({t:"Início",url:"/"},{t:"Chat",url:"/chat"}))
    feed.appendChild(content())
    feed.appendChild(foot())
    return(feed)
}