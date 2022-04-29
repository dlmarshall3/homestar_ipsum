const transcripts = require('./transcripts');
let sentenceInt = [];
let newSentenceIntArray = [];

class GenerateNewText {
    constructor() {
        this.sentences = transcripts;
        for(let i = 0; i < this.sentences.length; i++){
            sentenceInt.push(i)
        }
        newSentenceIntArray = shuffleSentenceIntArray(sentenceInt); 
    }
    getRandomSentence() {
        let firstNewSentenceIntArrayIndex = newSentenceIntArray.shift();
        console.log(firstNewSentenceIntArrayIndex)
        let randomSentence = this.sentences[firstNewSentenceIntArrayIndex];
	    return randomSentence;
    }
    getParagraph() {
        let paragraph = "";
        let minimumCharacterLength = 500;
        let firstSentence = true;
        while (paragraph.length < minimumCharacterLength) {
            if (firstSentence) {
            paragraph = paragraph.concat(this.getRandomSentence());
            firstSentence = false;
        } else {
            paragraph = paragraph.concat(" " + this.getRandomSentence());
        }
    }
        return paragraph;
    }
    getAllParagraphs(numberOfParagraphs) {
        let allParagraphs = [];
        while (allParagraphs.length < numberOfParagraphs) {
            allParagraphs.push(this.getParagraph());
        }
        let paragraphHTML = "";
        allParagraphs.forEach(function (paragraph) {
            paragraphHTML += "<p>" + paragraph + "</p>";
        });
        return paragraphHTML;
    }
}

function shuffleSentenceIntArray(array){
    let currentIndex = array.length, randomIndex;
    while (currentIndex !=0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex --;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

const loremIpsum = new GenerateNewText();

module.exports = loremIpsum;