export default function photo(src){
    let style = `
        {
            width:100%;
            height:200px;
        }`

    const photo = cE("img", style)
    photo.src = src
    return(photo)
}