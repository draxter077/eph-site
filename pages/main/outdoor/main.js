import scroll from "./scroll/main.js"

export default function outdoor(){
    let style = `
        {
            width:80%;
            overflow:hidden;
            margin:40px 0px 0px 0px;
        }
        :responsive{
            width:100%;
            margin:20px 0px 0px 0px;
        }`

    const outdoor = cE("div", style)
    outdoor.appendChild(scroll(
        [
            {src:"./assets/1.png",url:"/categoria/Eletrônicos"},
            {src:"./assets/2.png",url:"/categoria/Casa"},
            {src:"./assets/3.png",url:"/categoria/Bolsas,%20Malas%20e%20Mochilas"},
            {src:"./assets/4.png",url:"/categoria/Roupas,%20Calçados%20e%20Acessórios"},
            {src:"./assets/5.png",url:"/categoria/Roupas,%20Calçados%20e%20Acessórios"},
            {src:"./assets/6.png",url:"/categoria/Beleza%20e%20Cuidados%20Pessoais"},
            {src:"./assets/7.png",url:"/categoria/Roupas,%20Calçados%20e%20Acessórios"}
        ]
    ))
    return(outdoor)
}