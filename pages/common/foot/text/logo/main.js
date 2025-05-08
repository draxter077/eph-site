export default function logo(){
    let style = `
        {
            height:60px;
            margin:0px 5px 0px 0px;
        }
        :responsive{
            height:45px;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/logo.png"
    return(logo)
}