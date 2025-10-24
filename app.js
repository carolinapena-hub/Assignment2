//1. Hämtar data från TheMealDB API
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then(response => response.json())
    .then(data => {
        const meals = data.meals;


// 2.Funktion : Grupperar måltider efter en nyckel
        function groupBy(items, key) {
            return items.reduce((acc, item) => {
                const groupKey = item[key];
                if (!acc[groupKey]) {
                    acc[groupKey] = [];
                }
                acc[groupKey].push(item);
                return acc;
            }, {});
        }
        const groupedByCategory = groupBy(meals, "strCategory");
        console.log("\n Måltider grupperade efter kategori:");
        console.log(groupedByCategory);

// 3.Funktion : kompakta sammanfattningar
        function mapToSummary(meals) {
            return meals.map(meal => {
                const ingredients = [];
                for (let i = 1; i <= 20; i++) {
                    const ingredient = meal[`strIngredient${i}`];
                    if (ingredient && ingredient.trim() !== "") {
                        ingredients.push(ingredient.trim());
                    }
                }
                return {
                    id: meal.idMeal,
                    name: meal.strMeal,
                    category: meal.strCategory,
                    ingredients: ingredients
                };
            });
        }
        const summaries = mapToSummary(meals);
        console.log("\n Kompakta sammanfattningar av måltider:");
        console.log(summaries);

// 4.Funktion: Skapa frekvenskarta över ingredienser
        function buildIngredientFrequency(meals) {
            return meals.reduce((acc, meal) => {
                for (let i = 1; i <= 20; i++) {
                    const ingredient = meal[`strIngredient${i}`];
                    if (ingredient && ingredient.trim() !== "") {
                        const key = ingredient.trim();
                        acc[key] = (acc[key] || 0) + 1;
                    }
                }
                return acc;
            }, {});
        }
        const ingredientFrequency = buildIngredientFrequency(meals);
        console.log("\n Frekvenskarta över ingredienser:");
        console.log(ingredientFrequency);

        // 5. Skriver ut de första 5 måltidsnamnen i alfabetisk ordning
        const sortedMeals = meals
            .sort((a, b) => a.strMeal.localeCompare(b.strMeal))
            .slice(0, 5)
            .map(meal => meal.strMeal);

        console.log(" Första 5 måltider i alfabetisk ordning:");
        console.log(sortedMeals);

        // 6. Filtrerar måltider som tillhör kategorin ("Seafood")
        const givenCategory = "Seafood";
        const filteredMeals = meals.filter(meal =>
            meal.strCategory.toLowerCase() === givenCategory.toLowerCase()
        );

        console.log(`\n Måltider i kategorin "${givenCategory}":`);
        filteredMeals.forEach(meal =>
            console.log(`- ${meal.strMeal} (${meal.strCategory})`)
        );

        // 7. Visar hur många gånger varje kategori förekommer
        const categoryCount = meals.reduce((acc, meal) => {
            const category = meal.strCategory;
            acc[category] = (acc[category] || 0) + 1;
            return acc;
        }, {});

        console.log("\n Antal måltider per kategori:");
        console.log(categoryCount);
    })
    .catch(error => console.error("Något gick fel vid hämtning av data:", error));





