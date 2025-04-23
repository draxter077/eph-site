import photo from "./photo/main.js"
import title from "./title/main.js"
import price from "./price/main.js"

export default function item(url, src, t, p){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:200px;
            padding:10px;
            margin:10px;
            border-radius:10px;
            background:var(--colorWhite);
            cursor:pointer;
            transition:transform var(--transitionTime);
        }
        :hover{
            transform:scale(1.1);
        }`

    const item = cE("div", style)
    item.addEventListener("click", function a(){window.open(url, "_blank")})
    item.appendChild(photo(src))
    item.appendChild(title(t))
    item.appendChild(price(p))
    return(item)
}