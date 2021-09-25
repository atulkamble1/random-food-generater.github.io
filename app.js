// For Random Food Generation onclick event
function myFunction() {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(meal => {
            return meal.json();
        }).then(showmeal);
        document.getElementById('row').style.display = 'flex';
        document.getElementById('Thankyou').innerHTML = `<center>Thank You For Wisiting 😀 !</center>`
        document.getElementById('Thankyou').style.cssText = `display:block;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;`
}


// Display Information About meal
function showmeal(meal) {
    console.log(meal);
    document.getElementById('img').src = `${meal.meals[0].strMealThumb}`
    document.getElementById('category').innerHTML = `<b>Category :</b> ${meal.meals[0].strCategory}`
    document.getElementById('area').innerHTML = `<b>Area :</b> ${meal.meals[0].strArea}`
    document.getElementById('tags').innerHTML = `<b>Tags :</b> ${meal.meals[0].strTags}`
    document.getElementById('method').innerHTML = `${meal.meals[0].strInstructions}`
    document.getElementById('methodname').innerHTML = `${meal.meals[0].strMeal}`
    document.getElementById('Ingredients-heading').innerHTML = 'Ingredients :'
    
    // Array to store ingredient list
    var ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (meal.meals[0][`strIngredient${i}`]) {
            ingredients.push(`${meal.meals[0][`strIngredient${i}`]} - ${meal.meals[0][`strMeasure${i}`]}`);

        } else {
            //in case there's no more ingredients, end loop
            break;

        }

    }
    // Display Ingredients Array
    var displayArray = ""
    for (var i = 1; i < ingredients.length; i++) {

        displayArray = displayArray + '• ' + ingredients[i] + "<BR>";
    }
    document.getElementById('Ingredients').innerHTML = displayArray;

    // Display youtube Channel    
    document.getElementById('youtube').src = `https://www.youtube.com/embed/${meal.meals[0].strYoutube.slice(-11)}`
    console.log(`https://www.youtube.com.embed/${meal.meals[0].strYoutube.slice(-11)}`)
    document.getElementById('Video Recipe-heading').innerHTML = `<b>Video Recipe :<b>`

    // Display Meal Link
    document.getElementById('weblink').innerHTML = '<b>Click To See Meal Recipe<b>'
    document.getElementById('weblink').href=`${meal.meals[0].strSource}`

}

// The end






