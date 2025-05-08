import post from "./post/main.js"

export default function scroll(postArray){
    let style = `
        {
            display:flex;
            flex-direction:row;
            transition:transform var(--transitionTime);
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
            if(window.innerWidth > 1080){postWidth = 520}
            else{postWidth = 320}
            while(true){
                await new Promise(resolve => setTimeout(resolve, 2000))

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