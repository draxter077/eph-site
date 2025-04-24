import head from "./head/main.js"

export default function menu(){
    let style = `
        {
            position:fixed;
            top:0%;
            left:-100%;
            width:30%;
            height:100%;
            background:var(--colorWhite);
            box-shadow:0px 0px 20px 0px var(--colorBlack);
            z-index:5;
            transition:left var(--transitionTime);
        }
        :responsive{width:100%; box-shadow:none}`

    const menu = cE("div", style)
    menu.id = "menu"
    menu.appendChild(head())
    return(menu)
}