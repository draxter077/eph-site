import img from "./img/main.js"

export default function photo(src){
    let style = `
        {
            display:flex;
            align-items:center;
            justify-content:center;
            width:100%;
            aspect-ratio:0.9;
            overflow:hidden;
        }`

    const photo = cE("div", style)
    photo.appendChild(img(src))
    return(photo)
}