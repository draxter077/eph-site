export default function category(t){
    let style = `
        {
            font-size:22px;
            color:var(--colorOrange);
            background:var(--colorWhite);
            padding:5px 10px;
            margin:0px 10px;
            border-radius:5px;
            transition:all var(--transitionTime);
            cursor:pointer;
        }
        :hover{
            color:var(--colorWhite);
            background:var(--colorOrange);
        }
        :responsive{
            font-size:17px;
            padding:3px 7px;
        }`

    const category = cE("div", style)
    category.innerHTML = t

    category.addEventListener(
        "click",
        function a(){
            window.open("/categoria?" + t, "_self")
        }
    )

    return(category)
}