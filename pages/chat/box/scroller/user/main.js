import options_send from "./options_send/main.js"

export default function user(type){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:flex-end;
            width:100%;
            max-height:0px;
            margin:5px 0px;
            overflow:hidden;
            transition:all var(--transitionTime);
        }`

    const user = cE("div", style)
    user.appendChild(options_send(type))
    return(user)
}