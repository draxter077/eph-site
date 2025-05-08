export default function title(t){
    let style = `
        {
            font-size:15px;
            padding:5px 10px 0px;
            color:var(--colorWhite);
            background:var(--colorOrange);
            text-wrap:nowrap;
            width:100%;
        }
        :responsive{
            font-size:12px;
            padding:2px 5px;
        }`
    
    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}