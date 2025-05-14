export default function img(src){
    let style = `
        {
            height:100%;
        }`

    const img = cE("img", style)
    img.src = src
    return(img)
}