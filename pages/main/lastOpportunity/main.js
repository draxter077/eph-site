export default function lastOpportunity(){
    let style = `
        {
            width:90%;
            height:150px;
            background:purple;
        }`

    const lastOpportunity = cE("div", style)
    lastOpportunity.innerHTML = "Últimas oportunidades"
    return(lastOpportunity)
}