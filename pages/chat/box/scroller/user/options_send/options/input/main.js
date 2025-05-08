export default function input(placeholder){
    let style = `
        {
            font-size:18px;
            padding:5px 10px;
            margin:10px;
            border-bottom:1px solid var(--colorBlack);
        }
        ::placeholder{
            font-style:italic;
        }
        :responsive{
            font-size:15px;
        }`

    const input = cE("input", style)
    input.placeholder = placeholder
    return(input)
}