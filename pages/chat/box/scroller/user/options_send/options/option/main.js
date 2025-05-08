import products from "../../../../../../../../products.js"
import product from "../../../../../../../common/product/main.js"

export default function option(t, type){
    let style = `
        {
            font-size:18px;
            background:var(--colorOrange02);
            padding:5px 10px;
            border-radius:5px;
            margin:5px;
            cursor:pointer;
            transition:all var(--transitionTime);
        }
        :hover{
            background:var(--colorOrange);
            color:var(--colorWhite);
        }
        :responsive{
            font-size:15px;
            padding:2px 5px;
        }`

    const option = cE("div", style)
    option.innerHTML = t

    option.addEventListener(
        "click",
        async function a(){
            if(type == 0){
                let cs = option.parentElement.children
                for(let i = 0; i < cs.length; i++){
                    if(cs[i].style.background == "var(--colorOrange)"){
                        break
                    }
                    else if(i == cs.length - 1){
                        option.style.background = "var(--colorOrange)"
                        option.style.color = "var(--colorWhite)"
                        let cats = []
                        if(t == "Para mim mesmo"){
                            cats = ["Beleza e Cuidados Pessoais", 
                                "Bolsas, Malas e Mochilas", 
                                "Brinquedos e Jogos",
                                "Quarto",
                                "Sala",
                                "Eletrônicos",
                                "Esportes, Aventura e Lazer",
                                "Papelaria e Escritório",
                                "Roupas, Calçados e Acessórios"
                            ]
                        }
                        else if(t == "Casamento"){
                            cats = ["Casa",
                                "Eletrônicos",
                                "Ferramentas e Construção"
                            ]
                        }
                        else if(t == "Aniversário Infantil"){
                            cats = ["Brinquedos e Jogos",
                                "Esportes, Aventura e Lazer",
                                "Papelaria e Escritório"
                            ]
                        }
                        else if(t == "Dia das mães"){
                            cats = ["Beleza e Cuidados Pessoais",
                                "Bolsas",
                                "Quarto",
                                "Sala",
                                "Eletrônicos",
                                "Esportes, Aventura e Lazer",
                                "Feminino",
                                "Esportivo",
                                "Joias"
                            ]
                        }
                        else if(t == "Amigo secreto"){
                            cats = ["Beleza e Cuidados Pessoais",
                                "Casa",
                                "Eletrônicos",
                                "Esportes, Aventura e Lazer",
                                "Papelaria e Escritório"
                            ]
                        }
                        //let maxValue = document.getElementById("botScroller").children[2].children[0].children[0].children[0].value
                        //let minValue = document.getElementById("botScroller").children[2].children[0].children[0].children[1].value
                        //if(minValue == ""){minValue = 0}
                        //if(maxValue == ""){maxValue = 10000000000}
                        document.getElementById("botScroller").children[1].style.maxHeight = "1000px"
            
                        let pdts = []
                        for(let i = 0; i < products.length; i++){
                            let p = products[i]
                            let price = Number(p.price.replaceAll(",", "."))
                            if((cats.includes(p.category) || cats.includes(p.subcategory))){// && price >= minValue && price <= maxValue){
                                pdts.push(p)
                            }
                        }
                        let rPdts = []
                        while(true){
                            let rID = Math.floor(pdts.length*Math.random())
                            if(!rPdts.includes(pdts[rID])){
                                rPdts.push(pdts[rID])
                            }
                            if(rPdts.length == pdts.length){break}
                        }

                        let r = document.getElementById("recommendations")
                        for(let i = 0; i < rPdts.length; i++){
                            r.appendChild(product(rPdts[i]))
                        }

                        await new Promise(resolve => setTimeout(resolve, 1000));
                        document.getElementById("botScroller").children[0].style.maxHeight = "1000px"
                    }
                }
            }
        },
        {once:true}
    )
    return(option)
}