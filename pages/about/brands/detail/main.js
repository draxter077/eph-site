import brand from "./brand/main.js"

export default function detail(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:flex-start;
            justify-content:space-between;
            width:90%;
        }`

    const detail = cE("div", style)
    detail.appendChild(brand("ph.jpg", "https://www.ph.net.br", "A PH Web Software desenvolveu o site e a inteligência artificial"))
    detail.appendChild(brand("goldilocks.png", "https://www.instagram.com/goldilocks_marketing/", "A Goldilocks cuida do marketing e da visibilidade online da marca Giph"))
    return(detail)
}