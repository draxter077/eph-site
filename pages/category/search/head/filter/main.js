export default function filter(){
    let style = `
        {
            height:30px;
            margin:0px 0px 0px 20px;
        }
        :responsive{
            height:22px;
        }`

    const filter = cE("img", style)
    filter.src = "./assets/filter.png"
    return(filter)
}