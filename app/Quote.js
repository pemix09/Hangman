export default class Quote {

    constructor(quote){
        this.quote = quote;
    }

    getContent(){
        let content = '';
        for(const char of this.quote){
            if(char !== ' '){ 
                content += '_';
            }
            else{
                content += ' ';
            }
        }
        return content;
    }
}