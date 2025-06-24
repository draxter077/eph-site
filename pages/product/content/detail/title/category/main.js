export default function category(c){
    let style = `
        {
            font-size:18px;
            color:var(--colorOrange);
            cursor:pointer;
            transition:color 0.5s;
        }
        :hover{
            color:var(--colorYellow);
        }
        :responsive{
            font-size:14px;
        }`

    const category = cE("div", style)
    category.innerHTML = `Ver mais itens em ${c}`
    category.addEventListener("click", () => window.open("/categoria?" + c, "_blank"))
    return(category)
}