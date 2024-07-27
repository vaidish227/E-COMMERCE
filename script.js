document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const productList = document.getElementById("productList");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Perform login logic here
            alert(`Logged in as ${username}`);
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const email = document.getElementById("email").value;

            // Perform signup logic here
            alert(`Signed up as ${username}`);
        });
    }

    if (productList) {
        // Example products
        const products = [
            { name: "Product 1", price: "$10", img: "https://5.imimg.com/data5/SELLER/Default/2022/11/YV/ZF/YO/116453489/white-casual-shoes-for-men.jpg" },
            { name: "Product 2", price: "$20", img: "https://5.imimg.com/data5/SELLER/Default/2022/11/YV/ZF/YO/116453489/white-casual-shoes-for-men.jpg" },
            { name: "Product 3", price: "$30", img: "https://5.imimg.com/data5/SELLER/Default/2022/11/YV/ZF/YO/116453489/white-casual-shoes-for-men.jpg" },
            { name: "Product 1", price: "$10", img: "https://5.imimg.com/data5/SELLER/Default/2022/11/YV/ZF/YO/116453489/white-casual-shoes-for-men.jpg" },
            { name: "Product 2", price: "$20", img: "https://5.imimg.com/data5/SELLER/Default/2022/11/YV/ZF/YO/116453489/white-casual-shoes-for-men.jpg" },
            { name: "Product 1", price: "$10", img: "https://5.imimg.com/data5/SELLER/Default/2022/11/YV/ZF/YO/116453489/white-casual-shoes-for-men.jpg" },
            { name: "Product 2", price: "$20", img: "https://5.imimg.com/data5/SELLER/Default/2022/11/YV/ZF/YO/116453489/white-casual-shoes-for-men.jpg" },
        ];

        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("col-md-4");
            productDiv.innerHTML = `
                <div class="card">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <a href="#" class="btn btn-primary">Buy Now</a>
                    </div>
                </div>`;
            productList.appendChild(productDiv);
        });
    }
});
