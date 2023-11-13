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
let sum = 10 + 20;
console.log(sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.round(Math.random() * 20);
console.log(random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: "Lorenzo",
  surname: "Pezzica",
  age: 24,
};
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["html", "css", "js"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("new skill");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
let dice = () => {
  while (true) {
    let res = Math.round(Math.random() * 6);

    if (res > 0) {
      return res;
    }
  }
};
console.log(dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
let num1 = 44;
let num2 = 60;
let whoIsBigger = (x, y) => {
  if (x > y) {
    console.log(x);
  } else {
    console.log(y);
  }
};
whoIsBigger(num1, num2);
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
let string = "Stringa completmente a caso";
let splitMe = (str) => {
  let splitArr = str.split(" ");
  return splitArr;
};
console.log(splitMe(string));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
let strEs4 = "linea di testo";
let boolean = false;
let deleteOne = (bool, str) => {
  if (bool) {
    let cut = str.slice(1);
    return cut;
  } else {
    let cut = str.slice(0, -1);
    return cut;
  }
};
console.log(deleteOne(boolean, strEs4));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e 
  la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
let strEs5 = "I have 4 dogs";
let onlyLetters = (str) => {
  let newStr = strEs5.replace(/[0-9]/g, "");
  return newStr;
};

console.log(onlyLetters(strEs5));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
let email = "oznerol@gmail.com";
let isThisAnEmail = (mail) => {
  if (mail.indexOf("@") > -1 && mail.indexOf(".") > -1) {
    console.log(mail + " is a valid email adress");
  } else {
    console.log(mail + " is not a valid email adress");
  }
};

isThisAnEmail(email);
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
let whatDayIsIt = () => {
  let day = String(new Date());
  let dayOnly = day.slice(0, 3);
  return dayOnly;
};
console.log(whatDayIsIt());
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel 
  parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le 
  invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un 
  array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
let diceRollRes = {
  sum: 0,
  values: [],
};
let timesToRoll = 3;
let rollTheDices = (num) => {
  for (i = 0; i < 3; i++) {
    let rollRes = dice();
    diceRollRes.sum += rollRes;
    diceRollRes.values.push(rollRes);
  }
  console.log(diceRollRes);
};
rollTheDices(timesToRoll);
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
let dateToCheck = new Date("2023-11-01");
let today = new Date();
let howManyDays = (date) => {
  let timeDif = today.getTime() - date.getTime();
  let dayDif = timeDif / (1000 * 3600 * 24);
  return dayDif;
};
console.log(Math.floor(howManyDays(dateToCheck)));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se 
  oggi è il tuo compleanno, falso negli altri casi.
*/

let isTodayMyBirthday = () => {
  if (today.getDate() === 31 && today.getMonth() + 1 === 12) {
    console.log("today is your birthday");
  } else {
    console.log("today is not your birthday");
  }
};

isTodayMyBirthday();
// Arrays & Oggetti
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

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e 
  una stringa come parametri; deve ritornare l'oggetto fornito dopo 
  aver eliminato in esso la proprietà chiamata come la stringa 
  passata come secondo parametro.
*/
let Es11obj = {
  nome: "Mario",
  cognome: "Rossi",
  citta: "Roma",
};

let propertyToDelete = "citta";
let deleteProp = (str) => {
  delete Es11obj[str];
  console.log(Es11obj);
};
deleteProp(propertyToDelete);
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più 
  recente nell'array "movies" fornito.
*/
let yearCount = 0;
let newestMovie = () => {
  movies.forEach((val) => {
    if (val.Year > yearCount) {
      yearCount = val.Year;
    }
  });
  return yearCount;
};
console.log(newestMovie());
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
let countMovies = () => {
  console.log(movies.length);
};
countMovies();
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
let onlyTheYears = movies.map((val) => {
  return val.Year;
});
console.log(onlyTheYears);
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
let onlyInLastMillennium = movies.filter((val) => {
  if (parseInt(val.Year) <= 1999) {
    return val;
  }
});
console.log(onlyInLastMillennium);
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
let initialValue = 0;
let sumAllTheYears = movies.reduce(
  (num, currentValue) => num + parseInt(currentValue.Year),
  initialValue
);
console.log(sumAllTheYears);
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una 
  stringa come parametro e ritorna i film nell'array "movies" 
  fornito che la contengono nel titolo.
*/
let strEs17 = "rings";
let searchByTitle = () => {
  let lowerStr = strEs17.toLowerCase();

  for (const key in movies) {
    let lowerTitle = movies[key].Title.toLowerCase();
    if (lowerTitle.indexOf(lowerStr) > -1) {
      console.log(movies[key]);
    } else {
    }
  }
};
searchByTitle();
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una 
  stringa come parametro e ritorna un oggetto contenente due 
  array: "match" e "unmatch". "match" deve includere tutti i film 
  dell'array "movies" fornito che contengono la stringa fornita 
  all'interno del proprio titolo, mentre "unmatch" deve includere 
  tutti i rimanenti.
*/
let strEs18 = "Lord";
let searchAndDivide = () => {
  let es18Obj = {
    match: [],
    unmatch: [],
  };
  for (const key in movies) {
    let lowerStr = strEs18.toLowerCase();
    let lowerTitle = movies[key].Title.toLowerCase();
    if (lowerTitle.indexOf(lowerStr) > -1) {
      es18Obj.match.push(movies[key]);
    } else {
      es18Obj.unmatch.push(movies[key]);
    }
  }
  console.log(es18Obj);
};
searchAndDivide();
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero 
  come parametro e ritorna l'array "movies" fornito privo 
  dell'elemento nella posizione ricevuta come parametro.
*/
let indexToRemove = 7;
let removeIndex = (num) => {
  delete movies[num];
  console.log(movies);
};
removeIndex(indexToRemove);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
let selectContainer = () => {
  let container = document.getElementById("container");
  container.style.backgroundColor = "grey";
};
selectContainer();
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
let selectTd = () => {
  let td = document.querySelectorAll("td");
  td[0].style.color = "green";
};
selectTd();
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il 
  testo contenuto in ogni tag <td> all'interno della pagina.
*/
let tdPrint = () => {
  let td = document.querySelectorAll("td");
  for (const key in td) {
    console.log(td[key].innerText);
    //non ho idea del perche mi stampi 6 undefined,
    //con getElementsByTagName mi stampa invece 3 undefined???????
  }
};

tdPrint();
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
let linkBG = () => {
  let links = document.querySelectorAll("a");
  for (i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "red";
  }
};
linkBG();
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista 
  non ordinata con id "myList".
*/

let addLiElement = () => {
  let ul = document.getElementById("myList");
  let newItem = `<li>elemento aggiunto</li>`;
  ul.innerHTML += newItem;
};
addLiElement();
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
let emptyList = () => {
  let ul = document.getElementById("myList");
  ul.innerHTML = "";
};
//emptyList();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe 
  CSS "test"
*/
let trAddClass = () => {
  let tr = document.querySelectorAll("tr");
  tr.forEach((ele) => {
    ele.classList.add("test");
  });
};
trAddClass();
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come 
  parametro e costruisce un mezzo albero di "*" (asterischi) 
  dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
let treeHeight = 5;
let halfTree = (num) => {
  let leaf = "*";
  for (i = 0; i < num; i++) {
    console.log(leaf.repeat([i]));
  }
};
halfTree(treeHeight);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un 
  numero come parametro e costruisce un albero di 
  "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve 
  un numero come parametro e ritorna true se il 
  numero fornito è un numero primo.
*/
let numberToCheck = Math.floor(Math.random() * 100);

let isItPrime = () => {
  if (numberToCheck === 1) {
    console.log(`1 non e ne primo ne composto`);
  } else if (numberToCheck > 1) {
    for (let i = 2; i < numberToCheck; i++) {
      if (numberToCheck % i == 0) {
        console.log(`${numberToCheck} non è primo`);
        break;
      } else {
        console.log(`${numberToCheck} è primo`);
        break;
      }
    }
  }
};
isItPrime();
