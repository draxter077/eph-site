import scroll from "./scroll/main.js"
import dots from "./dots/main.js"

export default function outdoor(){
    let style = `
        {
            width:100%;
            overflow:hidden;
            margin:40px 0px 0px 0px;
        }
        :responsive{
            margin:20px 0px 0px 0px;
        }`

    const outdoor = cE("div", style)
    outdoor.appendChild(scroll(
        [
            {src:"./assets/1.jpeg",f:function a(){window.open("/chat","_self")}},
            {src:"./assets/2.jpeg",f:function a(){document.getElementById("Novas ofertas").scrollIntoView({behavior:"smooth"})}},
            {src:"./assets/3.jpeg",f:function a(){document.getElementById("Recomendações").scrollIntoView({behavior:"smooth"})}},
            {src:"./assets/4.jpeg",f:function a(){window.open("/chat","_self")}}
        ]
    ))
    outdoor.appendChild(dots())
    return(outdoor)
}