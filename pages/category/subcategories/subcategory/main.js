export default function subcategory(t){
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

    const subcategory = cE("div", style)
    subcategory.innerHTML = t

    subcategory.addEventListener(
        "click",
        function a(){
            document.getElementById("categorySearch").scrollIntoView({behavior:"smooth"})
            document.getElementById("categorySearchInput").value = t
            document.getElementById("categorySearchInput").click()
        }
    )

    return(subcategory)
}