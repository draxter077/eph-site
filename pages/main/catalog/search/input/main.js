import products from "../../../../../products.js"

export default function input(){
    let style = `
        {
            width:50%;
            font-size:calc(0.7*var(--titleFontSize));
            padding:5px 10px;
            color:var(--colorWhite);
            border-bottom:1px solid var(--colorWhite);
        }
        :responsive{width:80%;}
        ::placeholder{font-style:italic; color:var(--colorWhite);}`

    const input = cE("input", style)
    input.placeholder = "Pesquise..."
    input.addEventListener(
        "input",
        function a(e){
            let items = e.target.parentElement.parentElement.children[3].children
            let value = e.target.value

            for(let i = 0; i < items.length; i++){
                let itemTitle = products[items[i].id].title

                for(let j = 0; j < itemTitle.length - value.length + 1; j++){
                    let optionsText = ""

                    for(let k = j; k < value.length + j; k++){
                        optionsText += itemTitle[k]
                    }

                    if(value == "" && items[items.length - i - 1].style.scale != 0){
                        items[items.length - i - 1].style.display = "flex"
                        break
                    }
                    else if(value.toLowerCase() != optionsText.toLowerCase() && items[items.length - i - 1].style.scale != 0){
                        items[items.length - i - 1].style.display = "none"
                    }
                    else if(value.toLowerCase() == optionsText.toLowerCase() && items[items.length - i - 1].style.scale != 0){
                        items[items.length - i - 1].style.display = "flex"
                        break
                    }
                }
            }
        }
    )
    return(input)
}