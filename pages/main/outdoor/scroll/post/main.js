export default function post(src, f){
    let style = `
        {
            height:300px;
            aspect-ratio:2;
            margin:10px;
            cursor:pointer;
            border-radius:10px;
            transition:transform var(--transitionTime);
            box-shadow:0px 0px 2px 0px var(--colorOrange);
        }
        :hover{
            transform:scale(1.05);
        }
        :responsive{
            height:fit-content;
            width:80%;
        }`

    const post = cE("img", style)
    post.src = src
    post.addEventListener("click", () => f())
    return(post)
}