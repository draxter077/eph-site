import options from "./options/main.js"
import send from "./send/main.js"

export default function options_send(type){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:flex-end;
            align-items:center;
            max-width:60%;
            background:var(--colorOrange02);
            border-radius:10px;
            padding:10px;
        }
        :responsive{
            max-width:90%;
            padding:5px 0px;
        }`

    const options_send = cE("div", style)
    options_send.appendChild(options(type))
    //options_send.appendChild(send())
    return(options_send)
}