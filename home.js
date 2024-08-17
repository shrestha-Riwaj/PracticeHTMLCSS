document.addEventListener("DOMContentLoaded",()=>{
    const products = [
        
        {
            imgUrl:"./images/laptop1.jpg",
        desc: "Best gaming Laptop",
        price:"$456",
        icon:"ri-shopping-cart-2-fill",
    },
    {
        imgUrl:"./images/laptop1.jpg",
    desc: "Best gaming Laptop",
    price:"$456",
    icon:"ri-shopping-cart-2-fill",
},
        {
            imgUrl:"./images/laptop2.png",
        desc: "Best gaming Laptop",
        price:"$456",
        icon:"ri-shopping-cart-2-fill",
    },
        {
            imgUrl:"./images/gaming.jpg",
        desc: "Best gaming Laptop",
        price:"$456",
        icon:"ri-shopping-cart-2-fill",
    },
        {
            imgUrl:"./images/laptop3.jpg",
        desc: "Best gaming Laptop",
        price:"$456",
        icon:"ri-shopping-cart-2-fill",
    },
    ];
    const productContainer = document.querySelector('.product-section ');
    products.forEach(product =>{
        const productDiv = document.createElement("div");
        productDiv.className="container";

        // const productDiv = document.getElementsByClassName("container");

        const img = document.createElement("img");
        img.className="prod-img";
        img.src=product.imgUrl;
        img.alt=product.desc;

        const desc = document.createElement("p");
        desc.className = "desc";
        desc.textContent=product.desc;

        const price = document.createElement('p');
        price.className = "price";
        price.textContent = product.price;

        const iconDiv = document.createElement("div");
        iconDiv.className="icon";



        const icons = document.createElement('i');
        icons.className="ri-shopping-cart-2-fill";
        iconDiv.appendChild(icons);
        // const btn = document.createElement("button");
        // btn.className="btn-icon";
        // btn.appendChild(icons);

        productDiv.appendChild(img);
        productDiv.appendChild(desc);
        productDiv.appendChild(price);
        // productDiv.appendChild(btn);
        productDiv.appendChild(iconDiv);

        productContainer.appendChild(productDiv);
    });

    const blogPosts = [
        {
           
            image:"./images/laptop3.jpg",
            title:"",
            desc:"",
            link:"",
        },
        {
            
            image:"",
            title:"",
            desc:"",
            link:"",
        },
        
    ];
    // const blogContainer = document.querySelector(".blog1");
    // blogPosts.forEach(blogPost=>{
        

    //     const blogDiv = document.createElement("div");
    //     blogDiv.className = "blog1-container";

    //     const img = document.createElement("img");
    //     img.className="blog1-img";
    //     img.src=blogPost.image;
    //     img.alt=blogPost.desc;
    //     blogDiv.appendChild(img);
    //     blogContainer.appendChild(blogDiv);
        
    // });
});