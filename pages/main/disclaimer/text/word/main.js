export default function word(l){
    let style = `
        {
            opacity:0;
        }`
    const word = cE("div", style)
    word.innerHTML = l
    return(word)
}