export default function title(){
    let style = `
        {
            font-size:18px;
            padding:2px 10px;
            border-bottom:1px solid var(--colorOrange);
            margin:0px 0px 10px 0px;
        }
        :responsive{
            font-size:16px;
        }`

    const title = cE("div", style)
    title.innerHTML = "Para esse projeto existir, precisou-se da união de duas empresas"
    return(title)
}