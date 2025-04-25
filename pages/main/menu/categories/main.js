export default function categories(){
    let style = `
        {
            width:100%;
            background:yellow;
        }`

    const categories = cE("div", style)
    categories.innerHTML = "Categories"
    return(categories)
}