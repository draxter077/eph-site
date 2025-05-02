export default function title(t){
    let style = `
        {
            font-size:14px;
            background:var(--colorOrange);
            color:var(--colorWhite);
            padding:5px 5px 0px 5px;
            max-height:24px;
            width:100%;
            overflow:hidden;
            text-wrap:nowrap;
        }
        :responsive{font-size:12px;max-height:22px;}`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}