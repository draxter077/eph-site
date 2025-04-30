export default function cross(){
    let style = `
        {
            height:10px;
            margin:0px 0px 0px 10px;
        }`

    const cross = cE("img", style)
    cross.src = "./assets/cross.png"
    return(cross)
}