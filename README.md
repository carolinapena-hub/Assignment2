# Assignment2- Måltidsprojekt


# Måltidsanalys med TheMealDB API

Detta projekt hämtar måltidsdata från [TheMealDB API](https://www.themealdb.com/api.php) och analyserar informationen med hjälp av JavaScript. Resultatet visas direkt i webbläsarens konsol.

## Funktioner

1. **API-anrop med `fetch`** 
    - Hämtar en lista med måltider från `https://www.themealdb.com/api/json/v1/1/search.php?s=`

### 2. Gruppering av måltider (`groupBy`)
Funktionen `groupBy(items, key)` grupperar måltider efter en viss nyckel, t.ex. `strCategory`. Resultatet blir ett objekt där varje kategori innehåller en lista med måltider:

{
  "Beef": [ ... ],
  "Chicken": [ ... ]
}
### 3. Funktionen mapToSummary(meals) skapar en förenklad version av varje måltid med:

- ID: exempel: "52772"
- Namn: "Teriyaki Chicken Casserole",
- Kategori: "Chicken",
- Lista med ingredienser: ["Chicken", "Soy Sauce", "Garlic", ...]

###4. Funktionen buildIngredientFrequency(meals) räknar hur ofta varje ingrediens förekommer i alla måltider:
  -"Salt": 12,
  -"Garlic": 8,
  -"Onion": 10
  
  
**Sortering**
    - Visar de första 5 måltiderna i alfabetisk ordning med `.sort()` och `.slice()`

**Filtrering**
    - Filtrerar måltider som tillhör en viss kategori (t.ex. "Seafood") med `.filter()`

**Reduceringsobjekt**
    - Skapar ett objekt som visar hur många måltider som finns per kategori med `.reduce()`


