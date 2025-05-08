export default function scroller(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:fit-content;
        }`

    const scroller = cE("div", style)
    scroller.id = "recommendations"
    return(scroller)
}