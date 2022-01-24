# Piranhas - aplikacja z fiszkami do nauki języków obcych

## Wymagania funkcjonalne aplikacji:

##### Aplikacja powinna umożliwiać tworzenie fiszek

- Fiszki domyślnie reprezentują parę słowo - definicja

##### Aplikacja powinna umożliwiać grupowanie utworzonych fiszek w zestawy

- Zestaw powinien mieć nazwę i ewentualnie opis
- Każdy zestaw powinien być sygnowany nazwą użytkownika który go stworzył

##### Aplikacja powinna umożliwiać grupowanie zestawów w kursy

##### Aplikacja powinna umożliwiać użytkownikowi stworzenie indywidualnego konta

- Konto umożliwia użytkownikowi zapamiętywanie tworzonych zestawów
- Konto umożliwia użytkownikowi zakładanie i dołączanie do grup

##### Aplikacja powinna przypisywać stworzone przez użytkownika zestawy do jego konta

##### Aplikacja powinna umożliwiać użytkownikom zakładanie oraz dołączanie do grup

##### Aplikacja powinna umożliwiać użytkownikowi dostosować ustawienia prywatności zestawu

- Zestaw może być publiczny, czyli widoczny dla wszystkich użytkowników systemu, lub prywatny, czyli widoczny tylko dla jego twórcy
- Zestaw może być także stworzony na poziomie grupy użytkowników

##### Aplikacja powinna umożliwiać użytkownikowi zapisanie zestawu innego użytkownika

- Dodanie go do folderu “Zapisane zestawy”
- Dodanie go do własnego kursu

## Backend aplikacji w formie API działa na poniższej domenie:

https://piranhas-flashcards.herokuapp.com/api/

## Schemat przedstawiający arichtekturę back-endu oraz relacje pomiędzy klasami

![BackendSchema](/uploads/bc5e306ed3f9db81a4c9094ed6285ba6/BackendSchema.png)

## Diagram Komunikacyjny UML

![CommunicationUML](/uploads/accb6059e18f31a211b31c770a1c4dad/CommunicationUML.png)

## Diagram Klas UML dla warstwy Persistence

![ClassUML](/uploads/77dfe0c271d98092e6e70cf27a207837/ClassUML.png)

## Opis najważniejszych klas back-endu aplikacji

**FlashcardsController** – stanowi warstwę kontrolera, a więc odpowiada za komunikacje z użytkownikiem – mapuje żądania http oraz zwraca użytkownikowi dane. Wykorzystuje w tym celu instancje klas z warstwy usług FlashcardService oraz AppUserDetailsService, jak również klas wspomagających JwtUtil oraz AuthenticationManager.

- generateToken() – przyjmuje login orazhasło i w przypadku dopasowania danych do bazy na temat użytkowników generuje JSON Web Token, którego użytkownik potrzebuje by móc korzystać z pełnej funkcjonalności aplikacji.
- registerUser() – rejestruje nowego użytkownika na podstawie przyjętych danych o loginie, haśle i adresie email.
- getPreviewSets() – zwraca zestawy fiszek do wyświetlania na głównej stronie aplikacji frontendowej. W przypadku użytkownika niezalogowanego jest to zestaw losowo wybranych zestawów o ustalonej liczności, a dla użytkowników zalogowanych zwraca również losowo wybrane zestawy z kursów danego użytkownika.
- getMarketSets() – zwraca wszystkie zestawy z marketu, czyli te, które są publiczne.
- getMarketSet() – zwraca konkretny publiczny zestaw na podstawie jego nazwy.
- getUserCourses() – na podstawie nazwy użytkownika pozyskanej z nagłówka autoryzacyjnego zawierającego token JWT zwraca listę wszystkich kursów danego użytkownika.
- getuserCourse() – zwraca konkretny kurs należący do danego użytkownika na podstawie nazwy kursu.
- getUserSet() – zwraca zestaw stworzony przez użytkownika na podstawie nazwy zestawu.
- addCourse() – dodaje nowy kurs oraz przypisuje go do konta danego użytkownika.
- addSet() – dodaje nowy zestaw do danego kursu na podstawie nazwy kursu.
- addFlashcardToSet() – dodaje fiszkę do zestawu o podanej nazwie.
- updateFlashcard() – modyfikuje zawartość danej fiszki na podstawie jej id.

**FlashcardService** – klasa pośrednicząca między kontrolerem a obiektem dostępu do bazy danych. Korzysta z instancji klasy OracleDataAccessObject implementującej interfejs FlashcardsDAO, zainicjowanej za pomocą wstrzykiwania zależności. Korzysta z metod interfejsu FlashcardsDAO, w niektórych przypadkach wykonując dodatkowe operacje takie jak pozyskanie nazwy użytkownika na podstawie tokena JWT czy operacje na danych pozyskanych z bazy.

- getAllPublicSets() – wywołuje metodę getAllPublicSets() z FlashcardsDAO.
- getSetByName() - wywołuje metodę getSetByNameSecure() z FlashcardsDAO.
- getMarketSetByName() - wywołuje metodę getSetByName() z FlashcardsDAO.
- getPreviewSets() – pozyskuje wszystkie publiczne zestawy oraz zestawy użytkownika, a następnie zwarca losową próbkę o ustalonej długości z obu tych kategorii.
- getUserCourses() – pozyskuje nazwę użytkownika i na jej podstawie zwraca jego kursy.
- getCourse() – za pomocą metody FlashcardsDAO pozyskuje dany kurs a następnie zwraca listę należących do niego zestawów.
- createNewCourse() - wywołuje metodę createCourse() z FlashcardsDAO.
- addNewSetToCourse() - wywołuje metodę addSetToCourse() z FlashcardsDAO.
- addFlashcard() – wywołuje metodę addFlashcardToSet() z FlashcardsDAO.
- updateFlashcard() – wywołuje metodę updateFlashcard() z FlashcardsDAO.
- getUserNameFromToken() – z JSON Web Token pozyskuje nazwę użytkownika.

**AppUserDetailsService** – implementuje interfejs UserDetailsService wymagany w implementacj systemu autoryzacji użytkowników. Korzysta z zaimplementowanego interfejsu UsersDAO i odpowiada za operacje związane z zarządzaniem danymi użytkowników.

- loadUserByUsername() – nadpisana metoda interfejsu UserDetailsService generująca obiekt klasy User o danej nawie użytkownika i pozyskanym za jej pomocą haśle.
- registerUser() – wywołuje metodę registerUser() interfejsu UsersDAO.

**OracleDataAccessObject** – klasa implementująca interfejsy FlashcadsDAO oraz UsersDAO. Korzystając z JDBC łączy się z bazą danych Oracle i za pomocą odpowiednich zapytań SQL pozykuje z niej potrzebne dane, a następnie konwertuje je do obiektów zdefiniowanych w warstwie modeli i przekazuje do wyższych warstw.

Metody z **FlashcardsDAO**:

- getSetByName() – na podstawie nazwy zestawu zwraca obiekt klasy Set wraz z listą należących do niego fiszek typu Flashcard.
- getSetByNameSecure() - na podstawie nazwy zestawu zwraca obiekt klasy Set, ale jedynie jeżeli należy on do danego użytkownika lub jest publiczny.
- getAllPublicSets() – zwraca wszystkie publiczne zestawy dostępne w bazie danych.
- getCourse() – zwraca dany kurs na podstawie jego nazwy. Tworzy obiekt klasy Course, wszystkie przypisane do niego zestawy konwertuje na obiekty Set i przypisuje do listy zestawów kursu, analogicznie postępuje dla każdego zestawu z listą fiszek.
- getAllUserCourses() – zwraca wszystkie kursy z bazy danych przypisane danemu użytkownikowi w formie Listy obiektów klasy Kurs, tworzy potrzebne obiekty Set i Flashcard.
- addFlashcardToSet() – tworzy nową fiszkę z kluczem obcym odnoszącym się do istniejącego zestawu.
- updateFlashcard() – zmienia wartości frazy i definicji danej fiszki.
- crateCourse() – tworzy nowy kurs i przypisuje tworzącemu użytkownikowi.
- setSetPrivacy() – ustawia nową wartość prywatności danego zestawu.
- addSetToCourse() – tworzy nowy ‘pusty’ zestaw oraz ustawia odpowiednie parametry w tabeli pośredniej między kursami a zestawami.

Metody z **UsersDAO**:

- findByUserName() – na podstawie nazwy użytkownika znajduje resztę informacji na jego temat.
- registerUser() – dodaje nowego użytkownika do bazy danych.
- addUserToGroup() – dodaje danego użytkownika do danej grupy.
- createGroup() – tworzy nową grupę użytkowników.

Klasy z warstwy modelu:

- Flashcard – reprezentuje pojedynczą fiszkę posiadającą numer identyfikacyjny, przód oraz tył.
- Set – reprezentuje zestaw posiadający nazwę, informację o dostępności publicznej, nazwę kursu do którego jest przypisany oraz listę należących do niego fiszek reprezentowanych przez obiekty klasy Flashcard.
- Course – reprezentuje kurs posiadający nazwę oraz listę należących do niego zestawów reprezentowanych przez obiekty klasy Set.
- AppUser – reprezentuje użytkownika aplikacji posiadającego numer identyfikacyjny, nazwę, hasło i email.

Pozostałe klasy z dopiskiem Request służą do ułatwienia odbierania danych przekazywanych przez użytkownika.

### Opis frontendu aplikacji

**Struktura kodu**

Cało

**Biblioteki**
axios - używana do obsługi zapytań HTTP przy interakcji użytkownika z naszą aplikacją oraz do sprawdzenia stanu zalogowania użytkownika

- clsx - ułatwienie łączenia klas importowanych do komponentów z plików SCSS
- react-select - ułatwienie tworzenia i stylowania komponentów typu input select
- react-router - używana do obsługi routingu w całej aplikacji
- swiper - używana do tworzenia komponentów typu slider
