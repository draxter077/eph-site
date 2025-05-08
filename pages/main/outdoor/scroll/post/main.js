export default function post(src, url){
    let style = `
        {
            height:250px;
            aspect-ratio:2;
            background:red;
            margin:10px;
            cursor:pointer;
            border-radius:10px;
            transition:transform var(--transitionTime);
        }
        :hover{
            transform:scale(1.05);
        }
        :responsive{
            height:150px;
        }`

    const post = cE("img", style)
    post.src = src
    post.addEventListener(
        "click",
        function a(){
            window.open(url, "_blank")
        }
    )
    return(post)
}