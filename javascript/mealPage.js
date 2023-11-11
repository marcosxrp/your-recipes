const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('id');
const mealInfo = document.getElementById('mealInfo')

getDataById(recipeId)
    .then(mealDetail => mealInfo.innerHTML = mealToPage(mealDetail))

function mealToPage(mealDetail){
    const ingredientsAndMeasuresHtml = getIngredientsAndMeasuresHtml(mealDetail);
    const instructionsHtml = InstructionsToLi(mealDetail.strInstructions);

    return `
        <h2>${mealDetail.strMeal}</h2>
        <span>${mealDetail.strArea} - ${mealDetail.strCategory}</span>
        <h3>Ingredients</h3>
        <ul id="listOfIngredients">
            ${ingredientsAndMeasuresHtml}
        </ul>
        <h3>Instructions</h3>
        <ol id="instructions">
            ${instructionsHtml}
        </ol>
        <h3>Youtube video</h3>
        <iframe src="${linkToEmbed(mealDetail.strYoutube)}"></iframe>
        
        
    `
}

function linkToEmbed(linkOriginal) {
    if (linkOriginal.includes("watch?v=")) {
        var linkConverted = linkOriginal.replace("watch?v=", "embed/");
        return linkConverted;
    } else {
        return linkOriginal;
    }
}

function getIngredientsAndMeasuresHtml(mealDetail){
    let html = '';

    for(let i=1; i<=20; i++){
        const ingredient = mealDetail[`strIngredient${i}`];
        const measure = mealDetail[`strMeasure${i}`]

        if(ingredient){
            html += `<li>${ingredient} - ${measure}</li>`
        }
    }

    return html;
}

function InstructionsToLi(instructions) {
    let instructionsHtml = '';
    let dividedText = instructions.split('.');

    dividedText.forEach((instruction) => {
        if (instruction.trim() !== '') {
            instructionsHtml += `<li>${instruction.trim()}</li>`;
        }
    });

    return instructionsHtml;
}