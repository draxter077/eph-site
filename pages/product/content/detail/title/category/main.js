export default function category(c){
    let style = `
        {
            font-size:18px;
            color:var(--colorOrange);
            cursor:pointer;
        }
        :responsive{
            font-size:14px;
        }`

    const category = cE("div", style)
    category.innerHTML = c
    category.addEventListener("click", () => window.open("/categoria?" + c, "_blank"))
    return(category)
}