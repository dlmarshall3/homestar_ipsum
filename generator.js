const transcripts = require('./transcripts');

class GenerateNewText {
    constructor() {
        this.sentences = transcripts;
    }
    getRandomSentence() {
        let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)];
        console.log(this.sentences.length)
	    return randomSentence;
    }
    getParagraph() {
        let paragraph = "";
        let minimumCharacterLength = 300;
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