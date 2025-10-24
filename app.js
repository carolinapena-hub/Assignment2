// Hämtar data från TheMealDB API
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then(response => response.json())
    .then(data => {
        const meals = data.meals;

        // 1. Skriver ut de första 5 måltidsnamnen i alfabetisk ordning
        const sortedMeals = meals
            .sort((a, b) => a.strMeal.localeCompare(b.strMeal))
            .slice(0, 5)
            .map(meal => meal.strMeal);

        console.log(" Första 5 måltider i alfabetisk ordning:");
        console.log(sortedMeals);

        // 2. Filtrerar måltider som tillhör kategorin ("Seafood")
        const givenCategory = "Seafood";
        const filteredMeals = meals.filter(meal =>
            meal.strCategory.toLowerCase() === givenCategory.toLowerCase()
        );

        console.log(`\n Måltider i kategorin "${givenCategory}":`);
        filteredMeals.forEach(meal =>
            console.log(`- ${meal.strMeal} (${meal.strCategory})`)
        );

        // 3. Visar hur många gånger varje kategori förekommer
        const categoryCount = meals.reduce((acc, meal) => {
            const category = meal.strCategory;
            acc[category] = (acc[category] || 0) + 1;
            return acc;
        }, {});

        console.log("\n Antal måltider per kategori:");
        console.log(categoryCount);
    })
    .catch(error => console.error("Något gick fel vid hämtning av data:", error));
