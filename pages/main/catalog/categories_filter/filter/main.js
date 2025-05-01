import img from "./img/main.js"
import options from "./options/main.js"

export default function filter(){
    let style = `
        {
            position:relative;
            width:40px;
            box-shadow:-20px 0px 20px 0px var(--colorOrange);
            z-index:2;
            cursor:pointer;
        }
        :responsive{width:30px;}`

    const filter = cE("div", style)
    filter.appendChild(img())
    filter.appendChild(options())    
    return(filter)
}