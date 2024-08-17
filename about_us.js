document.addEventListener("DOMContentLoaded", ()=>{
    const pages = [
{
    img:"./images/laptop1.jpg",
    title:"",
    text:"",
    link:"",
},
{
    img:"./images/laptop1.jpg",
    title:"",
    text:"",
    link:"",
},
    ];
    const pageContainer = document.querySelector('.our-stories');
    pages.forEach(page=>{
        const pageDiv = document.createElement("div");
        pageDiv.className="contain-container";

        const imgDiv = document.createElement("div");
        imgDiv.className = "img-container"
        const img = document.createElement("img");
        img.src=page.img

        imgDiv.appendChild(img);

        const boxDiv=document.createElement("div");
        boxDiv.className="box-container";
        const title = document.createElement("h2");
        title.className="h2-title";
        title.textContent = page.title
        const text = document.createElement("p");
        text.className="text-containe"
        text.textContent=page.text
        const link=document.createElement("a");
        link.href=page.link;

        boxDiv.appendChild(title);
        boxDiv.appendChild(text);
        boxDiv.appendChild(link);

        pageDiv.appendChild(imgDiv);
        pageDiv.appendChild(boxDiv);

        pageContainer.appendChild(pageDiv);

    })
});