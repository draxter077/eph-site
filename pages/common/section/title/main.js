export default function title(t){
    let style = `
        {
            font-size:30px;
            padding:0px 10px;
            border-bottom:1px solid var(--colorOrange);
            color:var(--colorOrange);
            width:100%;
        }
        :responsive{
            font-size:22px;
            margin:0px 10px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}