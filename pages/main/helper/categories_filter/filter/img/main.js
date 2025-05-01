export default function img(){
    let style = `
        {
            width:100%;
            transition:transform var(--transitionTime);
        }
        :hover{transform:scale(1.1)}`

    const img = cE("img", style)
    img.src = "./assets/filter.png"

    img.addEventListener(
        "click",
        function a(){
            let filter = img.parentElement
            filter.children[1].style.maxWidth = "1000%"
            filter.children[1].style.maxHeight = "1000%"
        }
    )

    return(img)
}