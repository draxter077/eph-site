export default function items(){
    let style = `
        {
            width:100%;
            background:red;
        }`

    const items = cE("div", style)
    items.innerHTML = "items"
    return(items)
}