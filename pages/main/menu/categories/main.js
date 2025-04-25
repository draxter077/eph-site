export default function categories(){
    let style = `
        {
            width:100%;
            background:yellow;
            margin:10px 0px 0px 0px;
        }`

    const categories = cE("div", style)
    categories.innerHTML = "Categories"
    return(categories)
}