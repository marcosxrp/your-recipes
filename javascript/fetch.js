function getDataByName(mealName) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => data.meals)
}

function getDataById(id){
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    return fetch(url)
        .then(response => response.json())
        .then(data => data.meals[0])
}