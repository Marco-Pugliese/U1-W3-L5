/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("Esercizio A: ");
const sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/ console.log("Esercizio B: ");
const random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("Esercizio C:");
const me = {
  name: "Marco",
  surname: "Pugliese",
  age: 31,
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("Esercizio D: ");
delete me.age;

console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("Esercizio E: ");

const mySkills = [];
mySkills.push("JavaScript");
me.skills = mySkills;
console.log(me);
console.log("me.skills = " + me.skills);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("Esercizio F:");
mySkills.push("jQuery");
console.log(me);
console.log("me.skills = " + me.skills);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("Esercizio G: ");
me.skills.pop();
console.log(me);
console.log("me.skills = " + me.skills);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("Esercizio 1: ");
const dice = () => {
  const random = Math.floor(Math.random() * 6) + 1;
  return random;
};
console.log(dice(random));

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("Esercizio 2: ");
console.log(
  "Execute 'whoIsBigger(n1,n2)' with 2 numbers as parameters to check which is bigger"
);
const whoIsBigger = (n1, n2) => {
  if (n1 > n2) {
    return console.log(n1);
  } else if (n1 < n2) {
    return console.log(n2);
  } else if (n1 === n2) {
    return console.log(n1 + " è uguale a " + n2);
  }
};
console.log("Example: whoIsBigger(5,15)");
whoIsBigger(5, 15);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.
  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("Esercizio 3: ");
console.log(
  "Execute 'split me(str)' with a sentence as parameter instead of str to split the words"
);
const splitMe = (str) => {
  const splitted = str.split(" ");
  return console.log(splitted);
};
console.log("Example: splitMe('Hello Epicode, my name is Marco')");
console.log(splitMe("Hello Epicode, my name is Marco"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("Esercizio 4: ");
console.log(
  "Execute 'deleteOne(str, trueOrFalse)' with a string as first parameter and a boolean as second"
);
const deleteOne = (str, trueOrFalse) => {
  if (trueOrFalse === true) {
    console.log(str.slice(1));
  } else {
    console.log(str.slice(0, -1));
  }
};

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

// APPROCCIO CON FOR ED IF
console.log("Esercizio 5: ");
console.log(
  "Execute 'onlyLetters(str)' with a string as parameter to see the result"
);
console.log("Example: onlyLetters('I have 1 Dog, and his name is 'Bacco'')");
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const onlyLetters = (str) => {
  const splittedStr = str.split("");
  for (let i = 0; i < splittedStr.length; i++) {
    for (let y = 0; y < numbers.length; y++)
      if (splittedStr[i] === numbers[y]) {
        newPhrase =
          splittedStr.join("").slice(0, i - 1) +
          splittedStr.join("").slice(i + 1);
      }
  }
  console.log(newPhrase);
};
onlyLetters("I have 1 dog, and his name is 'Bacco'");
// //APPROCCIO CON FILTER:
// const onlyLetters = (str) => {
//   let stringSTR = str.split("");
//   const newPhrase = stringSTR.filter((x) => {
//     x !== "0" &&
//       x !== "1" &&
//       x !== "2" &&
//       x !== "3" &&
//       x !== "4" &&
//       x !== "5" &&
//       x !== "6" &&
//       x !== "7" &&
//       x !== "8" &&
//       x !== "9";
//   });
//   console.log(newPhrase);
// };
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("Esercizio 6: ");
console.log("Execute 'isThisAnEmail(str)' with an email as parameter");
console.log("Example : isThisAnEmail('baccoismydog@doggo.com')");
const isThisAnEmail = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "@") {
      return true;
    }
  }
};
isThisAnEmail("baccoismydog@doggo.com");

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("Esercizio 7: ");
const whatDayIsIt = () => {
  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const today = new Date().getDay();
  console.log(week[today]);
};
whatDayIsIt();
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("Esercizio 8: ");
console.log("Execute 'rollTheDices(n)' a argument-number of times");
console.log("Example: 'rollTheDices(6)' is: ");
const arrayofRandom = [];
let theSum = 0;
const rollTheDices = (x) => {
  for (let i = 0; i < x; i++) {
    arrayofRandom.push(dice());
  }
  for (let y = 0; y < arrayofRandom.length; y++) {
    theSum += arrayofRandom[y];
  }
  console.log("Numbers extracted: " + arrayofRandom);
  console.log("The sum is " + theSum);
};
rollTheDices(6);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("Esercizio 9: ");
console.log(
  "Execute 'howManyDays(month,day,year)' filling the required parameters with numbers"
);
let differenceOfDays;
const howManyDays = (month, day, year) => {
  const date = new Date();
  const date2 = new Date(`${month}, ${day}, ${year}`);
  const dateTime = date2.getTime();
  const todayTime = date.getTime();
  let timeDifference = todayTime - dateTime;
  timeDifference = timeDifference / (1000 * 60 * 60 * 24);
  if (timeDifference > 0) {
    console.log(
      "Starting from day you choosed, now " +
        Math.floor(timeDifference) +
        " have been passed"
    );
  }
  if (timeDifference < 0) {
    timeDifference = Math.floor(Math.abs(timeDifference));
    console.log(
      "Wow the date you selected is " +
        Math.abs(timeDifference) +
        " in the future"
    );
  }
};

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/ console.log("Esercizio 10: ");
console.log("Execute 'isTodatyììyMyBirthday()' to see if is my birthday");
const isTodayMyBirthday = () => {
  const myBirthday = new Date("03, 12,1992");
  const dayOfBirthday = myBirthday.getDate();
  const monthOfBirthday = myBirthday.getMonth() + 1;
  const birthdayMonthAndDay = `${monthOfBirthday} ${dayOfBirthday}`;
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const todayMonthAndDay = `${month} ${day}`;
  if (birthdayMonthAndDay === todayMonthAndDay) {
    console.log(true);
  } else {
    return false;
  }
};

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
// Arrays & Oggetti

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri;
  deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("Esercizio 11: ");
const deleteProp = (obj, str) => {
  const selected = movies[obj][str];
  console.log(selected);
  // delete movies[obj][str]; non posso disattivarlo sennò non mi legge un'altra funzione.. però avrei fatto cosi
  console.log(movies);
};
deleteProp(3, "Title");

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("Esercizio 12: ");
const newestMovie = (arr) => {
  let newest = arr[0]; // supponiamo che il primo elemento dell'array che abbiamo passato nella funzione sia il più moderno
  arr.forEach((movie) => {
    if (movie.Year > newest.Year) {
      // La metodologia corretta prevede l'utilizzo dei parseInt nei parametri confrontati
      newest = movie;
    }
  });
  return newest;
};
console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("Esercizio 13: ");
const countMovies = () => {
  console.log(movies.length);
};
countMovies();

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("Esercizio 14: ");
const yearsOnly = [];
const onlyTheYears = () => {
  for (let i = 0; i < movies.length; i++) {
    yearsOnly.push(movies[i].Year);
  }
  console.log(yearsOnly);
};
onlyTheYears();

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

console.log("Esercizio 15: ");
const filmPost2000 = [];
const onlyInLastMillennium = () => {
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > 2000) {
      filmPost2000.push(movies[i]);
    }
  }
  console.log(filmPost2000);
};
onlyInLastMillennium();

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("Esercizio 16: ");
let allYears = 0;
const sumAllTheYears = () => {
  for (let i = 0; i < movies.length; i++) {
    allYears = allYears + parseInt(movies[i].Year);
  }
  console.log(allYears);
};
sumAllTheYears();

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

console.log("Esercizio 17: ");
const searchByTitle = (str) => {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title === str) {
      console.log(movies[i]);
    }
  }
};
searchByTitle("Avengers: Endgame");

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const match = [];
const unmatch = [];
console.log("Esercizio 18: ");
const searchAndDivide = (str) => {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(str.toLowerCase())) {
      match.push(movies[i]);
    } else {
      unmatch.push(movies[i]);
    }
  }
  console.log(match, unmatch);
};
searchAndDivide("loRD");

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("Esercizio 19: ");
const removeIndex = (n) => {
  movies.splice(n, 1);
  console.log(movies);
};
removeIndex(3);

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const elementWithContainerId = document.getElementById("container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const allTD = document.querySelectorAll("td");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

for (let i = 0; i < allTD.length; i++) {
  console.log(allTD[i].innerText);
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const allA = document.querySelectorAll("a");
for (let i = 0; i < allA.length; i++) {
  allA[i].style.backgroundColor = "red";
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const myList = document.getElementById("myList");
newLI = document.createElement("li");

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const allLiInUl = document.querySelectorAll("#myList li");
for (let i = 0; i < allLiInUl.length; i++) {
  allLiInUl[i].innerText = "";
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const theTR = document.querySelectorAll("td");
for (let i = 0; i < theTR.length; i++) {
  theTR[i].classList.add("test");
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***
*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("Esercizio 29:");
console.log(
  "Execute 'isItPrime(n)' with a number as parameter to check if the number is a prime number"
);

const isItPrime = (n) => {
  for (let i = 2; i < n / 2; i++) {
    if (n % i === 0) {
      console.log("This is not a prime number");
      return;
    } else if (n % i !== 0) {
      console.log("This is  a prime number");
      return;
    }
  }
};
