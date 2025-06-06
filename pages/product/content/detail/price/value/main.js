export default function value(p){
    let style = `
        {
            font-size:35px;
            color:var(--colorBlack);
            margin:0px 0px 10px 0px;
        }
        :responsive{
            font-size:25px;
        }`

    const value = cE("div", style)
    value.innerHTML = `R$ ${p}*`
    return(value)
}