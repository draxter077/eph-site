export default function text(t){
    let style = `
        {
            font-size:15px;
        }
        :responsive{
            font-size:12px;
        }`

    const text = cE("div", style)
    text.innerHTML = t
    return(text)
}