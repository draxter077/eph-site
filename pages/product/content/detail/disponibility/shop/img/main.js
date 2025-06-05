export default function img(s){
    let style = `
        {
            width:30px;
            margin:0px 0px 0px 7px;
        }
        :responsive{
            width:20px;
        }`

    const img = cE("img", style)
    img.src = `./assets/${s}.png`
    return(img)
}