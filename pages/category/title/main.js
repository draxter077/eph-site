export default function title(t){
    let style = `
        {
            font-size:15px;
            width:90%;
            margin:5px 0px 0px 0px;
            color:var(--colorOrange);
        }`

    const title = cE("div", style)
    title.innerHTML = `Você está na categoria ${t}`
    return(title)
}