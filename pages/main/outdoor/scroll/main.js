import post from "./post/main.js"

export default function scroll(postArray){
    let style = `
        {
            display:flex;
            flex-direction:row;
            padding:0px 0px 0px 40px;
            transition:transform var(--transitionTime);
        }
        :responsive{
            padding:0px 0px 0px 20px;
        }`

    const scroll = cE("div", style)
    
    for(let i = 0; i < postArray.length; i++){
        scroll.appendChild(post(postArray[i].src, postArray[i].url))
    }

    window.addEventListener(
        "load",
        async function a(){
            let i = 1;
            let postWidth;
            if(window.innerWidth > 1080){postWidth = 620}
            else{postWidth = window.innerWidth*0.8 + 3}
            while(true){
                await new Promise(resolve => setTimeout(resolve, 4000))

                if(i == postArray.length){
                    scroll.style.transform = `translate(0px)`
                    i = 0
                }
                else{
                    scroll.style.transform = `translate(-${postWidth*i}px)`
                }
                i += 1
            }
        }
    )

    return(scroll)
}