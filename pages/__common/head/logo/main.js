export default function logo(){
    let style = `
        {
            height:80px;
            cursor:pointer;
        }
        :responsive{
            height:60px;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/logo.png"
    logo.addEventListener(
        "click",
        function a(){window.open("/", "_self")}
    )
    return(logo)
}