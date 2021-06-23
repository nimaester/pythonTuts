class Rules {
  constructor() {
    this.rules = "THIS IS THE RULES";
  }

  trial() {
    return this.rules;
  }
}

class Hangman extends Rules {
  constructor(word, guesses) {
    super();
    this.word = word.toLowerCase().split("");
    this.guesses = guesses;
    this.lettersUsed = [];
  }

  getPuzzle() {
    let guess = "";
    this.word.forEach((letter) => {
      if (this.lettersUsed.includes(letter) || letter === " ") {
        guess += letter;
      } else {
        guess += "*";
      }
    });

    if (guess === this.word.join("")) {
      return `You solved it! The word is "${guess}"`;
    } else {
      return guess;
    }
  }

  makeGuess(char) {
    let letter = char.toLowerCase();
    if (this.lettersUsed.includes(letter)) {
      return "Use another letter";
    } else {
      this.lettersUsed.push(letter);
      this.guesses -= 1;
      if (this.guesses < 0) {
        return "You ran out of guesses";
      }
      return this.getPuzzle();
    }
  }
}

const h1 = new Hangman("kitten", 10);

window.addEventListener("keypress", (event) => {
  console.log(h1.makeGuess(event.key));
});
