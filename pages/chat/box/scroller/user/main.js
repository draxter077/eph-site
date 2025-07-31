import content from "./content/main.js"

export default function user(){
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
    user.appendChild(content())
    return(user)
}