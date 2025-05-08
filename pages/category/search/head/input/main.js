import products from "../../../../../products.js"

export default function input(){
    let style = `
        {
            width:50%;
            font-size:22px;
            padding:5px 10px;
            border-bottom:1px solid var(--colorWhite);
            color:var(--colorWhite);
        }
        ::placeholder{
            font-style:italic;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:17px;
        }`

    const input = cE("input", style)
    input.id = "categorySearchInput"
    input.placeholder = "Pesquise..."

    function a(e){
        let ps = input.parentElement.parentElement.children[1].children[0].children
        for(let i = 0; i < ps.length; i++){
            let p = products[ps[i].id]
            let t = p.title + " " + p.category + " " + p.subcategory
            if(!t.toLowerCase().includes(e.target.value.toLowerCase())){
                ps[i].style.display = "none"
            }
            else{
                ps[i].style.display = "flex"
            }
        }
    }

    input.addEventListener(
        "input",
        function b(e){a(e)}
    )
    input.addEventListener(
        "click",
        function b(e){a(e)}
    )

    return(input)
}