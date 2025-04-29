export default function word(l){
    let style = `
        {
            opacity:0;
            margin:0px 5px 0px 0px;
            transition:opacity var(--transitionTime);
        }`
    const word = cE("div", style)
    word.innerHTML = l
    return(word)
}