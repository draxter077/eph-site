import link from "./link/main.js"

export default function links(ar){
    let style = `
        {
            display:flex;
            flex-direction:row;
        }
        :responsive{order:2}`

    const links = cE("div", style)
    for(let i = 0; i < ar.length; i++){links.appendChild(link(ar[i][0], ar[i][1]))}
    return(links)
}