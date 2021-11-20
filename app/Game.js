import Quote from './Quote.js';
import { GetQuotes } from './GetQuotes.js';

export default class Game {
  currentStep = 0;
  lastStep = 7;
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

  guess(letter,event) {
    event.target.disabled = true;
    if(this.quote.guess(letter)){
      this.drawQuote();
    }
    else{
      this.currentStep++;
      document.getElementsByClassName('step')[this.currentStep].style.opacity = 1;
      if(this.currentStep == this.lastStep){
        this.loose();
      }
    }
  }

  win(){
    this.word.innerHTML = 'Gratulacje, wygrałeś!';
    this.letters.innerHTML = '';
  }
  loose(){
    this.word.innerHTML = 'Przegrywasz!';
    this.letters.innerHTML = '';
  }
  drawLetters() {
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      const button = document.createElement("button");
      button.innerHTML = label;
      button.addEventListener("click", (event) => this.guess(label,event));
      this.letters.appendChild(button);
    }
  }
  drawQuote(){
    this.content = this.quote.getContent();
    this.word.innerHTML = this.content;
    if(!this.content.includes('_')){
      this.win();
    }
  }
  start() {
    document.getElementsByClassName('step')[this.currentStep].style.opacity = 1;
    this.drawLetters();
    this.drawQuote();  
  }
}
