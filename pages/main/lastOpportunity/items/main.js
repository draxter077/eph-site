import item from "./item/main.js"

export default function items(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:fit-content;
            padding:20px;
        }`

    const items = cE("div", style)
    let is = [
        {url:"https://shopee.com.br/Boné-De-Beisebol-Retrô-Brooklyn-Bordado-Estilo-Rua-Unissex-Algodão-Macio-Lavado-Para-Uso-Diário-i.1006215031.24983127225",
        src:"https://down-br.img.susercontent.com/file/sg-11134201-7qvdl-liogkxkv3p4n4a@resize_w900_nl.webp",
        title:"Boné muito legal bla bla bla blal",
        price:"R$ 18,60"
        },
        {url:"https://shopee.com.br/Kit-3-Pantalona-Calça-Alfaiataria-Social-Cintura-Alta-Com-Cinto-e-Bolsos-Moda-Elegante-Tendência-Luxo-Formal-Premium-i.1305927934.23293722195?sp_atk=79cb0dad-2c4c-4b7e-a4a1-5f5a02de49d3&xptdk=79cb0dad-2c4c-4b7e-a4a1-5f5a02de49d3",
        src:"https://down-br.img.susercontent.com/file/br-11134207-7r98o-m6gra9olllyf9a.webp",
        title:"Calça blablablabla bla bla bla blablabla",
        price:"R$ 149,89"
        },
        {url:"https://shopee.com.br/Boné-De-Beisebol-Retrô-Brooklyn-Bordado-Estilo-Rua-Unissex-Algodão-Macio-Lavado-Para-Uso-Diário-i.1006215031.24983127225",
        src:"https://down-br.img.susercontent.com/file/sg-11134201-7qvdl-liogkxkv3p4n4a@resize_w900_nl.webp",
        title:"Boné muito legal bla bla bla blal",
        price:"R$ 18,60"
        },
        {url:"https://shopee.com.br/Boné-De-Beisebol-Retrô-Brooklyn-Bordado-Estilo-Rua-Unissex-Algodão-Macio-Lavado-Para-Uso-Diário-i.1006215031.24983127225",
        src:"https://down-br.img.susercontent.com/file/sg-11134201-7qvdl-liogkxkv3p4n4a@resize_w900_nl.webp",
        title:"Boné muito legal bla bla bla blal",
        price:"R$ 18,60"
        },
        {url:"https://shopee.com.br/Kit-3-Pantalona-Calça-Alfaiataria-Social-Cintura-Alta-Com-Cinto-e-Bolsos-Moda-Elegante-Tendência-Luxo-Formal-Premium-i.1305927934.23293722195?sp_atk=79cb0dad-2c4c-4b7e-a4a1-5f5a02de49d3&xptdk=79cb0dad-2c4c-4b7e-a4a1-5f5a02de49d3",
        src:"https://down-br.img.susercontent.com/file/br-11134207-7r98o-m6gra9olllyf9a.webp",
        title:"Calça blablablabla bla bla bla blablabla",
        price:"R$ 149,89"
        },
        {url:"https://shopee.com.br/Boné-De-Beisebol-Retrô-Brooklyn-Bordado-Estilo-Rua-Unissex-Algodão-Macio-Lavado-Para-Uso-Diário-i.1006215031.24983127225",
        src:"https://down-br.img.susercontent.com/file/sg-11134201-7qvdl-liogkxkv3p4n4a@resize_w900_nl.webp",
        title:"Boné muito legal bla bla bla blal",
        price:"R$ 18,60"
        },
        {url:"https://shopee.com.br/Boné-De-Beisebol-Retrô-Brooklyn-Bordado-Estilo-Rua-Unissex-Algodão-Macio-Lavado-Para-Uso-Diário-i.1006215031.24983127225",
        src:"https://down-br.img.susercontent.com/file/sg-11134201-7qvdl-liogkxkv3p4n4a@resize_w900_nl.webp",
        title:"Boné muito legal bla bla bla blal",
        price:"R$ 18,60"
        },
        {url:"https://shopee.com.br/Kit-3-Pantalona-Calça-Alfaiataria-Social-Cintura-Alta-Com-Cinto-e-Bolsos-Moda-Elegante-Tendência-Luxo-Formal-Premium-i.1305927934.23293722195?sp_atk=79cb0dad-2c4c-4b7e-a4a1-5f5a02de49d3&xptdk=79cb0dad-2c4c-4b7e-a4a1-5f5a02de49d3",
        src:"https://down-br.img.susercontent.com/file/br-11134207-7r98o-m6gra9olllyf9a.webp",
        title:"Calça blablablabla bla bla bla blablabla",
        price:"R$ 149,89"
        },
        {url:"https://shopee.com.br/Boné-De-Beisebol-Retrô-Brooklyn-Bordado-Estilo-Rua-Unissex-Algodão-Macio-Lavado-Para-Uso-Diário-i.1006215031.24983127225",
        src:"https://down-br.img.susercontent.com/file/sg-11134201-7qvdl-liogkxkv3p4n4a@resize_w900_nl.webp",
        title:"Boné muito legal bla bla bla blal",
        price:"R$ 18,60"
        },
        {url:"https://shopee.com.br/Boné-De-Beisebol-Retrô-Brooklyn-Bordado-Estilo-Rua-Unissex-Algodão-Macio-Lavado-Para-Uso-Diário-i.1006215031.24983127225",
        src:"https://down-br.img.susercontent.com/file/sg-11134201-7qvdl-liogkxkv3p4n4a@resize_w900_nl.webp",
        title:"Boné muito legal bla bla bla blal",
        price:"R$ 18,60"
        },
        {url:"https://shopee.com.br/Kit-3-Pantalona-Calça-Alfaiataria-Social-Cintura-Alta-Com-Cinto-e-Bolsos-Moda-Elegante-Tendência-Luxo-Formal-Premium-i.1305927934.23293722195?sp_atk=79cb0dad-2c4c-4b7e-a4a1-5f5a02de49d3&xptdk=79cb0dad-2c4c-4b7e-a4a1-5f5a02de49d3",
        src:"https://down-br.img.susercontent.com/file/br-11134207-7r98o-m6gra9olllyf9a.webp",
        title:"Calça blablablabla bla bla bla blablabla",
        price:"R$ 149,89"
        },
        {url:"https://shopee.com.br/Boné-De-Beisebol-Retrô-Brooklyn-Bordado-Estilo-Rua-Unissex-Algodão-Macio-Lavado-Para-Uso-Diário-i.1006215031.24983127225",
        src:"https://down-br.img.susercontent.com/file/sg-11134201-7qvdl-liogkxkv3p4n4a@resize_w900_nl.webp",
        title:"Boné muito legal bla bla bla blal",
        price:"R$ 18,60"
        }
    ]
    for(let i = 0; i < is.length; i++){items.appendChild(item(is[i].url, is[i].src, is[i].title, is[i].price))}
    return(items)
}