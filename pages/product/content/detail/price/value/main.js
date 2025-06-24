export default function value(p){
    let style = `
        {
            font-size:35px;
            color:var(--colorBlack);
            margin:0px 0px 10px 0px;
        }
        >span{
            font-size:15px;
            margin:0px 0px 0px 5px;
        }
        :responsive{
            font-size:25px;
        }`

    const value = cE("div", style)
    value.innerHTML = `R$ ${p.split(",")[0]}<span>${p.split(",")[1]}</span>`
    return(value)
}