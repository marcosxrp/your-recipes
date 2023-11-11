const homeInput = document.getElementById("food-search");
const homeSubmit = document.getElementById("homeSubmit");
const headerInput = document.getElementById("header_food-search");
const headerSubmit = document.getElementById("headerSubmit");
const mealsList = document.getElementById("mealsList");

headerSubmit.addEventListener('click', () => {
    const input = headerInput.value;
    performSearch(input);
});

headerInput.addEventListener('keydown', (event) => {
    const input = headerInput.value;
    if (event.key === "Enter") {
        event.preventDefault();
        performSearch(input);
    }
});
homeSubmit.addEventListener('click', () => {
    const input = homeInput.value;
    performSearch(input);
});

homeInput.addEventListener('keydown', (event) => {
    const input = homeInput.value;
    if (event.key === "Enter") {
        event.preventDefault();
        performSearch(input);
    }
});

function performSearch(input) {
    getDataByName(input)
        .then(meals => {
            const mealCards = meals.map(dataToLi)

            mealsList.innerHTML = mealCards.join('');

            mealsList.scrollIntoView({ behavior: 'smooth' });
        })
        .catch(error => {
            console.error(error);
        })
        .finally(() => {
            homeInput.value = "";
        })
}

function dataToLi(mealDetail){
    return `
    <a href="pages/recipe.html?id=${mealDetail.idMeal}">
        <li class="meal">
            <h3>${mealDetail.strMeal}</h3>
            <img src="${mealDetail.strMealThumb}" alt="${mealDetail.strMeal}">
        </li>
    </a>
    `
}
