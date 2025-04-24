export default function photo(src){
    let style = `
        {
            width:100%;
            aspect-ratio:1;
        }`

    const photo = cE("img", style)
    photo.src = src
    return(photo)
}