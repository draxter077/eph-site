export default function text(){
    let style = `
        {
            font-size:17px;
            color:var(--colorBlack);
        }
        :responsive{
            font-size:15px;
        }`

    const text = cE("div", style)
    text.innerHTML = "Giph é uma inteligência artificial que procura as melhores ofertas nas principais lojas do Brasil. Ela separa os produtos em categorias como 'Casa', 'Roupas, Calçados e Acessórios', 'Eletrônicos'.<br>Além disso, ela também pode te ajudar a encontrar o presente perfeito para cada ocasião: basta acessar nosso chat!"
    return(text)
}