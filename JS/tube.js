const loadTube = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    // console.log(data);
    const categories = data.data;
    displayCategories(categories);

}

const displayCategories = (categories) => {
    // console.log(categories);
    categories.forEach(eachCategory => {
        const categoriesBtn = document.createElement('button');
        categoriesBtn.classList = `btn btn-primary w-1/2`
        categoriesBtn.innerHTML = `${eachCategory.category}`;

        const categoriesContainer = document.getElementById('categories-container');
        categoriesContainer.appendChild(categoriesBtn);
    })
}


loadTube();




// added bolg page to index page 
document.getElementById('blog-page').addEventListener('click', () => {
    window.location.href = 'blog.html';
})
