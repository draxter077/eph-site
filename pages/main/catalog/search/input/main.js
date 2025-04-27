export default function input(){
    let style = `
        {
            width:50%;
            font-size:calc(0.7*var(--titleFontSize));
            padding:10px 15px;
            border-bottom:1px solid var(--colorOrange);
        }
        :responsive{width:80%;}`

    const input = cE("input", style)
    input.addEventListener(
        "input",
        function a(e){
            let items = e.target.parentElement.parentElement.children[3].children
            let value = e.target.value
            for(let i = 0; i < items.length; i++){
                for(let j = 0; j < items[i].id.length - value.length + 1; j++){
                    let optionsText = ""
                    for(let k = j; k < value.length + j; k++){
                        optionsText += items[i].id[k]
                    }
                    if(value == "" && items[i].style.scale != 0){
                        items[i].style.display = "flex"
                        break
                    }
                    else if(value.toLowerCase() != optionsText.toLowerCase() && items[i].style.scale != 0){
                        items[i].style.display = "none"
                    }
                    else if(value.toLowerCase() == optionsText.toLowerCase() && items[i].style.scale != 0){
                        items[i].style.display = "flex"
                        break
                    }
                }
            }
        }
    )
    return(input)
}