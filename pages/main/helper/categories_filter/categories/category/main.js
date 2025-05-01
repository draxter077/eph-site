export default function category(t){
    let style = `
        {
            font-size:17px;
            color:var(--colorWhite);
            margin:0px 15px 0px 0px;
            padding:5px 10px;
            border-radius:5px;
            text-wrap:nowrap;
            cursor:pointer;
            background:var(--colorOrange);
            transition:all var(--transitionTime);
        }
        :responsive{font-size:14px;}`

    const category = cE("div", style)
    category.innerHTML = t
    
    category.addEventListener(
        "click",
        function a(e){
            let currentBG = e.target.style.background
            if(currentBG == "var(--colorWhite)"){
                e.target.style.background = "var(--colorOrange)";
                e.target.style.color = "var(--colorWhite)"
            }
            else{
                e.target.style.background = "var(--colorWhite)";
                e.target.style.color = "var(--colorOrange)"
            }
        }
    )
    return(category)
}