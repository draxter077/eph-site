export default function dot(){
    let style = `
        {
            width:10px;
            height:10px;
            box-shadow:0px 0px 1px 1px var(--colorOrange);
            border-radius:100%;
            transition:background 0.5s;
            margin:0px 5px;
        }
        :responsive{
            width:5px;
            height:5px;
        }`

    const dot = cE("div", style)
    return(dot)
}