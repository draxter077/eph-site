export default function contact(){
    let style = `
        {
            width:90%;
            font-size:16px;
            text-align:center;
        }
        :responsive{
            font-size:14px;
        }
        >span{
            user-select:all;
            border-bottom:1px solid var(--colorOrange);
        }`

    const contact = cE("div", style)
    contact.innerHTML = "Em todas as páginas do site, no nosso rodapé, há os links para nossas principais redes sociais. Mas, para assuntos relevantes, envie um email para <span>gi@ph.net.br</span>"
    return(contact)
}