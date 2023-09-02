const loadTube = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    console.log(data);
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
            loadAllElements(eachCategory);
        })
    })
}

const loadAllElements = async (eachCategory) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${eachCategory.category_id}`);
    const data = await res.json();
    // console.log(data);

    const elements = data.data;
    const message = data.message;
    const empty = data.status;
    // console.log(empty);
    displayAllElements(elements, message, empty);
}

const displayAllElements = (elements, message, empty) => {
    // call the parent container
    const allElementsContainer = document.getElementById('all-elements-container');

    // clear the previous loaded all elements >>
    allElementsContainer.textContent = '';


    // console.log(elements);
    // console.log(message);
    // console.log(empty);

    // empty container with message >> not found data......................
    if (!empty) {
        const emptyCatetory = document.createElement('div');
        emptyCatetory.classList = `md:col-start-2`
        emptyCatetory.innerHTML = `
       <div class="flex flex-col justify-center"> 
       <img src="Icon.png" alt="Empty">
        <p class="text-3xl font-bold">${message}</p>
        </div>
        `;
        allElementsContainer.appendChild(emptyCatetory);
    }

    else {
        elements.forEach(eachElement => {
            const element = document.createElement('div');
            element.classList = `card w-auto bg-base-100 shadow-xl`;
            element.innerHTML = `
    <figure class="relative" >
    <img src="${eachElement.thumbnail}" alt="thumbnail"/>
    <div class="absolute right-0 bottom-0 text-blue-600 bg-black">${eachElement.others?.posted_date}</div>
    </figure>
    
    <div class="flex gap-4 my-5">
    <div class="bg-base-100 w-12 rounded-full "> 
    <img class="rounded-full w-full" src="${eachElement.authors[0]?.profile_picture}" alt="author" /> 
    </div>

    <div>
      <h2 class="card-title">
        ${eachElement.title}
      </h2>
      <p>
      <span>${eachElement.authors[0]?.profile_name}</span>
      <span>${eachElement.authors[0]?.verified}</span>
      </p>
      <p>${eachElement.others?.views}<span> views </span></p>
    </div>
    </div>
    `;

            // append the new element to the parent container 
            allElementsContainer.appendChild(element);
        })
    }//>> else closed

}



//called categorized btn
loadTube();




// added bolg page to index page 
document.getElementById('blog-page').addEventListener('click', () => {
    window.location.href = 'blog.html';
})
