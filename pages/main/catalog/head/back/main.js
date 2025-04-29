export default function back(){
    let style = `
        {
            height:40px;
            cursor:pointer;
            transition:transform var(--transitionTime);
        }
        :hover{transform:scale(1.1)}
        :responsive{height:30px}`

    const back = cE("img", style)
    back.src = "./assets/arrow.png"

    back.addEventListener(
        "click",
        function a(){
            document.getElementById("catalog").style.left = "-100%"
        }
    )

    return(back)
}