# Piranhas - aplikacja z fiszkami do nauki języków obcych

### Struktura kodu

Całość kodu źródłowego można podzielić na dwa główne foldery public oraz src.
![srcPublicFolders](/frontend/public/assets/srcPublicFolders.png)

**Folder public**
![publicFolder](/frontend/public/assets/publicFolder.png)

zawiera folder assets, w którym trzymane są pliki o rozszerzeniu .png oraz .svg. Dodatkowo znajduje się tam również folder styles a w nim plik vars.module.scss, w którym można znaleźć definicje stałych używanych w plikach scss

**Folder src**
![srcFolder](/frontend/public/assets/srcFolder.png)

- folder components zawiera wszystkie komponenty napisane w Javascriptcie, każdy z nich posiada osobny folder a w nim dwa pliki - jeden o rozszerzeniu .jsx a drugi .module.scss
- w folderze mocks można znaleźć wszelkie stałe używane na etapie projektu przed połączeniem frontendu z backendem
- w folderze pages znajdują się komponenty, które będą interpretowane jako całe strony w naszej aplikacji, każda ze stron posiada osobny folder a w nim plik .jsx oraz ewentualny plik .module.scss
- folder services zawiera klasy napisane w Javascripcie służące do obsługi zapytań HTTP

Oprócz powyższych folderów można jeszcze znaleźć pliki:

- index.js - odpowiedzialny za renderowanie całej aplikacji
- App.js - bazowy komponent odpowiedzialny za rozdzielanie routingu oraz przekazanie danych o zalogowaniu do komponentów dzieci
- App.scss - zawiera definicje podstawowych elementów DOM takich jak <body/> lub <a/>

### Biblioteki

- axios - używana do obsługi zapytań HTTP przy interakcji użytkownika z naszą aplikacją oraz do sprawdzenia stanu zalogowania użytkownika
- clsx - ułatwienie łączenia klas importowanych do komponentów z plików SCSS
- react-select - ułatwienie tworzenia i stylowania komponentów typu input select
- react-router - używana do obsługi routingu w całej aplikacji
- swiper - używana do tworzenia komponentów typu slider
