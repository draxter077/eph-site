export default function img(src){
    let style = `
        {
            width:100%;
            aspect-ratio:0.9;
        }`

    const img = cE("img", style)
    img.src = src
    return(img)
}