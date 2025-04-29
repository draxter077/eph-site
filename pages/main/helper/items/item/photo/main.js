export default function photo(src){
    let style = `
        {
            width:100%;
            aspect-ratio:0.9;
            border-radius:10px 10px 0px 0px;
        }`

    const photo = cE("img", style)
    photo.src = src
    return(photo)
}