import link from "./link/main.js"

export default function links(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            margin:10px 0px 0px 0px;
        }
        :responsive{margin:20px 0px 0px 0px;}`

    const links = cE("div", style)
    links.appendChild(link("instagram", "https://www.instagram.com"))
    links.appendChild(link("facebook", "https://www.facebook.com"))
    links.appendChild(link("tiktok", "https://www.tiktok.com"))
    links.appendChild(link("x", "https://www.x.com"))
    links.appendChild(link("youtube", "https://www.youtube.com"))
    return(links)
}