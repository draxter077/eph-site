export default function button(url){
    let style = `
        {
            font-size:22px;
            color:var(--colorWhite);
            background:var(--colorOrange);
            padding:10px 15px;
            border-radius:10px;
            transition:transform 0.5s;
        }
        :hover{
            transform:scale(1.05);
        }
        :responsive{
            font-size:18px;
            padding:5px 10px;
        }`

    const button = cE("button", style)
    button.innerHTML = "Ir para o site da oferta"
    button.addEventListener("click", ()=>window.open(url,"_blank"))
    return(button)
}