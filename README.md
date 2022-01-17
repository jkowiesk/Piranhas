# Piranhas - aplikacja z fiszkami do nauki języków obcych

## Wymagania funkcjonalne aplikacji:
##### Aplikacja powinna umożliwiać tworzenie fiszek
* Fiszki domyślnie reprezentują parę słowo - definicja
##### Aplikacja powinna umożliwiać grupowanie utworzonych fiszek w zestawy
* Zestaw powinien mieć nazwę i ewentualnie opis
* Każdy zestaw powinien być sygnowany nazwą użytkownika który go stworzył
##### Aplikacja powinna umożliwiać grupowanie zestawów w kursy
##### Aplikacja powinna umożliwiać użytkownikowi stworzenie indywidualnego konta
* Konto umożliwia użytkownikowi zapamiętywanie tworzonych zestawów
* Konto umożliwia użytkownikowi zakładanie i dołączanie do grup
##### Aplikacja powinna przypisywać stworzone przez użytkownika zestawy do jego konta
##### Aplikacja powinna umożliwiać użytkownikom zakładanie oraz dołączanie do grup
##### Aplikacja powinna umożliwiać użytkownikowi dostosować ustawienia prywatności zestawu
* Zestaw może być publiczny, czyli widoczny dla wszystkich użytkowników systemu, lub prywatny, czyli widoczny tylko dla jego twórcy
* Zestaw może być także stworzony na poziomie grupy użytkowników
##### Aplikacja powinna umożliwiać użytkownikowi zapisanie zestawu innego użytkownika 
* Dodanie go do folderu “Zapisane zestawy”
* Dodanie go do własnego kursu

## Backend aplikacji w formie API działa na poniższej domenie:
https://piranhas-flashcards.herokuapp.com/api/


## Schemat przedstawiający arichtekturę back-endu oraz relacje pomiędzy klasami
![BackendSchema](/uploads/bc5e306ed3f9db81a4c9094ed6285ba6/BackendSchema.png)

## Diagram Komunikacyjny UML
![CommunicationUML](/uploads/accb6059e18f31a211b31c770a1c4dad/CommunicationUML.png)

## Diagram Klas UML dla warstwy Persistence
![ClassUML](/uploads/77dfe0c271d98092e6e70cf27a207837/ClassUML.png)


