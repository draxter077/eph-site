export default function photo(src){
    let style = `
        {
            width:100%;
            aspect-ratio:0.9;
            border-radius:5px;
        }`

    const photo = cE("img", style)
    photo.src = src
    return(photo)
}