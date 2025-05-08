export default function t(text){
    let style = `
        {
            font-size:18px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:15px;
        }`

    const t = cE("div", style)
    t.innerHTML = text
    return(t)
}