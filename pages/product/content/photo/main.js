export default function photo(src){
    let style = `
        {
            height:60dvh;
            border-radius:5px;
            box-shadow:0px 0px 1px 0px var(--colorBlack);
        }
        :responsive{
            height:40dvh;
        }`

    const photo = cE("img", style)
    photo.src = src
    return(photo)
}