import img from "../text/img/main.js"

export default function links(){
    let style = `
        {
            display:flex;
            flex-direction:row;
        }
        :responsive{
            margin:10px 0px 0px 0px;
        }`

    const links = cE("div", style)
    links.appendChild(img("./assets/instagram.png", "https://www.instagram.com/giph_ai/"))
    links.appendChild(img("./assets/tiktok.png", "https://www.tiktok.com/@giph_ai"))
    links.appendChild(img("./assets/facebook.png", "https://www.facebook.com/people/Giph-AI/61575770826400/"))
    links.appendChild(img("./assets/x.png", "https://x.com/giph_ai"))
    links.appendChild(img("./assets/youtube.png", "https://www.youtube.com/@giph_ai"))
    return(links)
}