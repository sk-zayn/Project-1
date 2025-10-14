async function fetchCategories() {
    //this is async function and async function always returns a promise.
    const response = await fetch("https://fakestoreapi.com/products/categories")
    const data = response.json();
    return (data);
};
 
async function  populateCategory() {
    const category = await fetchCategories();
    const loaderBackdrop = document.getElementById("loaderBackdrop");
    loaderBackdrop.style.display = "none";
    // this returns us a promise and its in array thats why we are able to use forEach on this.
    const categoryList = document.getElementById("categoryList");
    category.forEach(category => {
        const categoryHolder = document.createElement("div");
        const categoryLink = document.createElement("a");
        categoryLink.href = `productlist.html?category=${category}`;
        categoryLink.textContent = category;
        categoryList.classList.add("category-list", "d-flex", "flex-row", "justify-content-center", "align-items-center");
        categoryHolder.classList.add("category-item", "d-flex", "justify-content-center", "align-items-center")
        categoryHolder.appendChild(categoryLink);
        categoryLink.classList.add("text-capitalize")
 
        categoryList.appendChild(categoryHolder);
        
    });   
};
populateCategory();