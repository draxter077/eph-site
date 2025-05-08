export default function word(t){
    let style = `
        {
            font-size:18px;
            margin:0px 7px 0px 0px;
            opacity:0;
            transition:opacity var(--transitionTime);
        }
        :responsive{
            font-size:15px;
        }`

    const word = cE("div", style)
    word.innerHTML = t
    return(word)
}