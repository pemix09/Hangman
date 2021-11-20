export default class Quote {

    constructor(quote){
        this.quote = quote;
        this.guessed = [];
    }

    getContent(){
        let content = '';
        for(const char of this.quote){
            if(char == ' ' || this.guessed.includes(char)){ 
                content += char;
            }
            else{
                content += '_';
            }
        }
        return content;
    }
    guess(letter){
        if(!this.quote.includes(letter)){
            return false;
        }
        this.guessed.push(letter);
        return true;
    }
}