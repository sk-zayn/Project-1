document.addEventListener("DOMContentLoaded",async ()=>{

    async function fetchProduct() {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        return response.data;    
    }
    const downloadedProduct = await fetchProduct();
    const queryParams = new URLSearchParams (window.location.search);
    const queryParamsObject = Object.fromEntries(queryParams.entries());

    async function fetchProductByCategoty(category) {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        console.log(response.data);
        return response.data;  
        
    }

    async function fetchCategories() {
    //this is async function and async function always returns a promise.
    const response = await fetch("https://fakestoreapi.com/products/categories")
    const data = response.json();
    return (data);
};

    async function populateProduct(flag , customProduct) {
        let products = customProduct;
        if (flag == false){
            if (queryParamsObject["category"]){
                products = await fetchProductByCategoty(queryParamsObject["category"]);
            }else{
                products = await fetchProduct();
            }
        }
        const productList = document.getElementById("productList")

        products.forEach(product => {
            const productItem = document.createElement("a");
            productItem.target = "_blank";
            productItem.classList.add("product-item", "text-decoration-none", "d-inline-block");
            productItem.href = "productdetails.html";

            const productImage = document.createElement("div");
            const productName = document.createElement("div");
            const ProductPrice = document.createElement("div");

            productImage.classList.add("product-image");
            productName.classList.add("product-name", "text-center");
            ProductPrice.classList.add("product-price", "text-center");
            

            productName.textContent = product.title.substring(0, 12) + "....";
            ProductPrice.innerHTML = `&#8377; ${product.price * 100}`;
            
            const imageInsideProduct = document.createElement("img");
            imageInsideProduct.src = product.image;

            productImage.appendChild(imageInsideProduct);
            productItem.appendChild(productImage);
            productItem.appendChild(productName);
            productItem.appendChild(ProductPrice);

            productList.appendChild(productItem)
            
        });
        
    }

    async function populateCategory() {
        const categories = await fetchCategories();
        const categoryList = document.getElementById("categoryList");
        categories.forEach(category=>{
            const categoryLink = document.createElement("a");
            categoryLink.classList.add("d-flex", "text-decoration-none");
            categoryLink.textContent = category;
            categoryLink.href =`productlist.html?category=${category}`;

            categoryList.appendChild(categoryLink);    
        })
        
    }

    async function downloadProductsandPopulate(){
        Promise.all([populateProduct(false), populateCategory() ])
        .then(()=>{
            const loaderBackdrop = document.getElementById("loaderBackdrop");
            loaderBackdrop.style.display = "none";
        });
        

    };
    downloadProductsandPopulate();
    
    

    const filterSearch = document.getElementById("search");

    filterSearch.addEventListener("click", async ()=>{

        const minPrice = Number(document.getElementById("minPrice").value);
        const maxPrice = Number(document.getElementById("maxPrice").value);
        const productList = document.getElementById("productList")
        const products = downloadedProduct;
        filterproducts = products.filter(product => product.price*100 >= minPrice && product.price*100 <= maxPrice);
        productList.innerHTML="";
        populateProduct(true, filterproducts)
    });
});