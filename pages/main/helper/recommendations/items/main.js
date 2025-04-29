export default function items(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            width:100%;
            height:100%;
            overflow-y:scroll;
            overflow-x:hidden;
        }`

    const items = cE("div", style)
    return(items)
}