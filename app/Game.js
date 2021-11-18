class Game {
  constructor({ lettersWrapper, categoryWrapper, wordWrapper, outputWrapper }) {
    this.letters = lettersWrapper;
    this.category = categoryWrapper;
    this.word = wordWrapper;
    this.output = outputWrapper;      
  }

  guess(letter){
      console.log(letter);
  }
  start() {
    for(let i =0;i < 26; i++){
        const label = (i + 10).toString(36);
        const button = document.createElement("button");
        button.innerHTML = label;
        button.addEventListener('click' ,() => this.guess(label));
        this.letters.appendChild(button);
    }
  }
}
