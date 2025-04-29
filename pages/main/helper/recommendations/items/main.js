export default function items(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            flex-wrap:wrap;
            width:95%;
            height:100%;
            overflow-y:scroll;
        }`

    const items = cE("div", style)
    return(items)
}