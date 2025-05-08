export default function scroller(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
        }`

    const scroller = cE("div", style)
    scroller.id = "recommendations"
    return(scroller)
}