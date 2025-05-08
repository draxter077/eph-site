export default function send(){
    let style = `
        {
            height:20px;
            padding:3px;
            background:var(--colorOrange);
            transform:rotate(180deg);
            cursor:pointer;
            transition:all var(--transitionTime);
        }
        :hover{
            box-shadow:0px 0px 0px 5px var(--colorOrange);
        }
        :responsive{
            height:20px;
            padding:3px;
        }`

    const send = cE("img", style)
    send.src = "./assets/arrow.png"
    return(send)
}