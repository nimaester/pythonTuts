class Hangman {
  constructor(word, guess) {
    this.word = word;
    this.guess = guess;
  }
}

const h1 = new Hangman("pete", 4);
const h2 = new Hangman("hacker", 3);

console.log(h1);
console.log(h2);
