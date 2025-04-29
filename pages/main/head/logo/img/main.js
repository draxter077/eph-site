export default function img(){
    let style = `
        {
            height:100%;
        }`

    const img = cE("img", style)
    img.src = "./assets/logo.png"
    return(img)
}