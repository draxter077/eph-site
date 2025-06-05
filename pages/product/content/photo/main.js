export default function photo(src){
    let style = `
        {
            height:80%;
            border-radius:5px;
            box-shadow:0px 0px 1px 0px var(--colorBlack);
        }
        :responsive{
            width:70%;
            height:fit-content;
        }`

    const photo = cE("img", style)
    photo.src = src
    return(photo)
}