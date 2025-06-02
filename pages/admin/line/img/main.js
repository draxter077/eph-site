export default function img(src){
    let style = `
        {
            height:70px;
            width:70px;
            margin:0px 5px;
        }`

    const img = cE("img", style)
    img.src = src
    return(img)
}