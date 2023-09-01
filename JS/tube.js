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
        // console.log(categoriesBtn);

        // category btn clicked 
        categoriesBtn.addEventListener('click', () => {
            // showElements();
            // console.log('button clicked..');
            loadAllElements(eachCategory);
        })
    })
}

const loadAllElements = async (eachCategory) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${eachCategory.category_id}`);
    const data = await res.json();
    // console.log(data);
    const elements = data.data;
    console.log(elements);
    displayAllElements(elements);

}

const displayAllElements = (elements) => {
    elements.forEach(eachElement => {
        const element = document.createElement('div');
        element.classList = `card w-auto bg-base-100 shadow-xl`;
        element.innerHTML = `
    <figure><img src="${eachElement.thumbnail}" alt="thumbnail" /></figure>
    <div class="flex">
    <div class="bg-gray-500 "> 
    <img class="rounded-full" src="${eachElement.authors[0]?.profile_picture}" alt="author" /> 
    </div>
    <div class="card-body">
   
      <h2 class="card-title">
        ${eachElement.title}
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
      </div>
    </div>
    </div>
    `;
        const allElementsContainer = document.getElementById('all-elements-container');
        allElementsContainer.appendChild(element);
    })
}




loadTube();




// added bolg page to index page 
document.getElementById('blog-page').addEventListener('click', () => {
    window.location.href = 'blog.html';
})
