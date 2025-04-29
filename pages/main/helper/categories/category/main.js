import products from "../../../../../products.js"

export default function category(t){
    let style = `
        {
            position:relative;
            font-size:17px;
            color:var(--colorOrange);
            margin:10px 15px 0px 0px;
            padding:0px 0px 2px 0px;
            font-weight:400;
            text-wrap:nowrap;
            cursor:pointer;
        }
        :responsive{font-size:14px;}
        ::after{
            content:"";
            position:absolute;
            bottom:0%;
            left:0%;
            width:0%;
            height:1px;
            background:var(--colorOrange);
            transition:width var(--transitionTime);
        }
        :hover::after{width:100%;}`

    const category = cE("div", style)
    category.innerHTML = t
    category.addEventListener(
        "click",
        function a(e){
            let currentFW = e.target.style.fontWeight
            if(currentFW == 600){e.target.style.fontWeight = 400;}
            else{e.target.style.fontWeight = 600;}
        }
    )
    return(category)
}