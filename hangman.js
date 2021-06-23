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
    this.status = "playing";
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
      this.status = "solved";
      return `You solved it! The word is "${guess}"`;
    } else {
      return guess;
    }
  }

  makeGuess(char) {
    let letter = char.toLowerCase();

    if (this.status === "finshed") {
      return "You ran out of guesses";
    }

    if (this.status === "solved") {
      return `You solved it! The word is "${this.word.join("")}"`;
    }

    if (this.lettersUsed.includes(letter) && this.status === "playing") {
      return "Use another letter";
    } else {
      this.lettersUsed.push(letter);
      this.guesses -= 1;

      if (this.guesses < 0) {
        this.status = "finished";
        return `You ran out of guesses. The word is "${this.word.join("")}"`;
      }
      return this.getPuzzle();
    }
  }
}

const h1 = new Hangman("kitten puppy", 11);

window.addEventListener("keypress", (event) => {
  console.log(h1.makeGuess(event.key));
});
