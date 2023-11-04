function getData(meal){
    const Url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`
    return fetch(Url)
        .then(response => response.json())
        .then(data => console.log(data))
}
    