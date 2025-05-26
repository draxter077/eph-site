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
                        if(t == "Quero encontrar algo para mim mesmo"){cats = ["Beleza e Cuidados Pessoais","Bolsas, Malas & Mochilas","Brinquedos e Jogos","Casa","Eletrônicos","Esportes, Aventura e Lazer","Papelaria e Escritório","Roupas, Calçados e Acessórios"]}
                        else if(t == "Presente de casamento"){cats = ["Casa","Eletrônicos","Ferramentas e Construção","Papelaria e Escritório","Esportes, Aventura e Lazer"]}
                        else if(t == "Presente para amigo secreto"){cats = ["Beleza e Cuidados Pessoais","Eletrônicos","Esportes, Aventura e Lazer","Quarto"]}
                        else if(t == "Presente para namorado" || t == "Presente para amigo"){cats = ["Mochilas","Quarto","Eletrônicos","Esportes, Aventura e Lazer","Papelaria e Escritório","Masculino","Esportivo","Relógios","Óculos"]}
                        else if(t == "Presente para namorada" || t == "Presente para amiga"){cats = ["Beleza e Cuidados Pessoais","Bolsas","Quarto","Eletrônicos","Esportes, Aventura e Lazer","Papelaria e Escritório","Feminino","Joias"]}
                        else if(t == "Presente para pai"){cats = ["Mochilas","Quarto","Sala","Eletrônicos","Esportes, Aventura e Lazer","Ferramentas e Construção","Papelaria e Escritório","Masculino","Esportivo","Relógios","Óculos"]}
                        else if(t == "Presente para mãe"){cats = ["Beleza e Cuidados Pessoais","Bolsas","Quarto","Sala","Eletrônicos","Esportes, Aventura e Lazer","Papelaria e Escritório","Feminino","Joias"]}
                        //let maxValue = document.getElementById("botScroller").children[2].children[0].children[0].children[0].value
                        //let minValue = document.getElementById("botScroller").children[2].children[0].children[0].children[1].value
                        //if(minValue == ""){minValue = 0}
                        //if(maxValue == ""){maxValue = 10000000000}
                        document.getElementById("botScroller").children[1].style.maxHeight = "1000px"
                        let ws = document.getElementById("botScroller").children[1].children[1].children
                        for(let i = 0; i < ws.length; i ++){
                            ws[i].style.opacity = 1
                            await new Promise(resolve => setTimeout(resolve, 100))
                        }
            
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
                            if(rPdts.length >= pdts.length/3){break}
                        }

                        let r = document.getElementById("botScroller").children[0].children[0]
                        for(let i = 0; i < rPdts.length; i++){
                            r.appendChild(product(rPdts[i]))
                        }

                        await new Promise(resolve => setTimeout(resolve, 3000));
                        document.getElementById("botScroller").children[0].style.maxHeight = "1000px"
                    }
                }
            }
        },
        {once:true}
    )
    return(option)
}