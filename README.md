# Assignment2- Måltidsprojekt



## Funktioner

1. **API-anrop med `fetch`**
    - Hämtar en lista med måltider från `https://www.themealdb.com/api/json/v1/1/search.php?s=`

2. **Sortering**
    - Visar de första 5 måltiderna i alfabetisk ordning med `.sort()` och `.slice()`

3. **Filtrering**
    - Filtrerar måltider som tillhör en viss kategori (t.ex. "Seafood") med `.filter()`

4. **Reduceringsobjekt**
    - Skapar ett objekt som visar hur många måltider som finns per kategori med `.reduce()`

## Så fungerar koden

- `fetch()` hämtar JSON-data från API:et
- När datan är hämtad:
    - Den sorteras alfabetiskt och de första 5 måltiderna skrivs ut
    - Den filtreras efter kategori seafood och matchande måltider skrivs ut
    - Den reduceras till ett objekt som räknar antal måltider per kategori
- Allt skrivs ut i konsolen

