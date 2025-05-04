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
    links.appendChild(link("instagram", "https://www.instagram.com/giph_ai/"))
    links.appendChild(link("facebook", "https://www.facebook.com/profile.php?id=61575770826400"))
    links.appendChild(link("tiktok", "https://www.tiktok.com/@giph_ai"))
    links.appendChild(link("x", "https://x.com/giph_ai"))
    links.appendChild(link("youtube", "https://www.youtube.com/@giph_ai"))
    return(links)
}