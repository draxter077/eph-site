export default function logo(src){
    let style = `
        {
            width:20%;
            aspect-ratio:1;
            margin:0px 0px 10px 0px;
        }
        :responsive{
            width:50%;
        }`

    const logo = cE("img", style)
    logo.src = `./assets/${src}`
    return(logo)
}