// app.js

// 1. Hämta data från TheMealDB API (alla måltider som matchar en tom sökning)
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then(response => response.json()) // Konvertera svaret till JSON
    .then(data => {
        const meals = data.meals;

        // Kontrollera att vi faktiskt fick måltider
        if (!meals) {
            console.log("Inga måltider hittades.");
            return;
        }

        // 2a. Sortera måltiderna alfabetiskt och skriv ut de första fem namnen
        const sortedMeals = meals
            .sort((a, b) => a.strMeal.localeCompare(b.strMeal)) // Sortera efter namn
            .slice(0, 5); // Ta de första fem

        console.log("Första 5 måltider i alfabetisk ordning:");
        sortedMeals.forEach(meal => console.log(meal.strMeal));

        // 2b. Filtrera måltider som tillhör en viss kategori (t.ex. "Seafood")
        const givenCategory = "Seafood";
        const filteredMeals = meals.filter(meal =>
            meal.strCategory.toLowerCase() === givenCategory.toLowerCase()
        );

        console.log(`\nMåltider i kategorin "${givenCategory}":`);
        filteredMeals.forEach(meal =>
            console.log(`${meal.strMeal} (${meal.strCategory})`)
        );

        // 2c. Skapa ett objekt som räknar hur många måltider som finns per kategori
        const categoryCount = meals.reduce((acc, meal) => {
            const category = meal.strCategory;
            acc[category] = (acc[category] || 0) + 1; // Öka räknaren för kategorin
            return acc;
        }, {}); // Starta med ett tomt objekt

        console.log("\nAntal måltider per kategori:");
        console.log(categoryCount);
    })
    .catch(error => {
        console.error("Fel vid hämtning av data:", error);
    });

/*
=== Förklaring av kodflöde ===

1. Vi använder `fetch()` för att hämta måltider från TheMealDB API.
2. Svaret konverteras till JSON-format.
3. Vi sorterar måltiderna alfabetiskt med `.sort()` och skriver ut de första fem.
4. Vi filtrerar måltider som matchar en viss kategori med `.filter()`.
5. Vi räknar hur många måltider som finns per kategori med `.reduce()` och sparar resultatet i ett objekt.
6. Alla resultat skrivs ut i konsolen.
*/



