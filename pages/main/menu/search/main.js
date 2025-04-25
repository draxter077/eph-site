export default function search(){
    let style = `
        {
            width:100%;
            background:purple;
        }`

    const search = cE("div", style)
    search.innerHTML = "Search"
    return(search)
}