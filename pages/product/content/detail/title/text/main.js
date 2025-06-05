export default function text(t){
    let style = `
        {
            font-size:28px;
            color:var(--colorBlack);
            width:100%;
            border-bottom:1px solid var(--colorOrange);
            text-align:right;
            padding:5px 10px;
        }
        :responsive{
            font-size:17px;
        }`

    const text = cE("div", style)
    text.innerHTML = t
    return(text)
}