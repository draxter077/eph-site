export default function option(t){
    let style = `
        {
            width:calc(100% - 10px);
            font-size:15px;
            margin:5px;
            padding:5px;
            border-bottom:1px solid var(--colorOrange);
        }
        ::placeholder{font-style:italic;}`

    const option = cE("input", style)
    option.placeholder = t
    option.addEventListener(
        "keypress",
        function a(e){
            if(e.key == "Enter"){option.parentElement.style.maxWidth = "0px"; option.parentElement.style.maxHeight = "0px"}
        }
    )
    return(option)
}