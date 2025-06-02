export default function title(t){
    let style = `
        {
            font-size:30px;
            margin:0px 10px 5px;
            color:var(--colorOrange);
        }
        :responsive{
            font-size:22px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}