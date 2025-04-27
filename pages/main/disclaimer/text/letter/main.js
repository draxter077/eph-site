export default function letter(l){
    let style = `
        {
            opacity:0;
        }`
    const letter = cE("div", style)
    letter.innerHTML = l
    return(letter)
}