export default function back(){
    let style = `
        {
            height:40px;
            cursor:pointer;
            transform:rotate(180deg);
            transition:transform var(--transitionTime);
        }
        :hover{transform:rotate(180deg) scale(1.1)}
        :responsive{height:30px}`

    const back = cE("img", style)
    back.src = "./assets/arrow.png"

    back.addEventListener(
        "click",
        function a(){
            document.getElementById("helper").style.right = "-100%"
        }
    )

    return(back)
}