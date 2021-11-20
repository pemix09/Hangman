import Quote from './Quote.js';
import { GetQuotes } from './GetQuotes.js';

export default class Game {
  quotes = GetQuotes();

  constructor({ lettersWrapper, categoryWrapper, wordWrapper, outputWrapper }) {
    this.letters = lettersWrapper;
    this.category = categoryWrapper;
    this.word = wordWrapper;
    this.output = outputWrapper;

    //choose random quote
    const {quote, category} = this.quotes[Math.floor(Math.random() * this.quotes.length)];
    this.category.innerHTML = category;
    this.quote = new Quote(quote);
  }

  guess(letter) {
    console.log(letter);
  }

  drawLetters() {
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      const button = document.createElement("button");
      button.innerHTML = label;
      button.addEventListener("click", () => this.guess(label));
      this.letters.appendChild(button);
    }
  }

  start() {
    this.drawLetters();

    this.content = this.quote.getContent();
    this.word.innerHTML = this.content;
  }
}
