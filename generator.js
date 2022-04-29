const transcripts = require('./transcripts')

class GenerateNewText {
    constructor() {
        this.sentences = transcripts;
    }
    getRandomSentence() {
        let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
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
            paragraphHTML += "<h3>" + paragraph + "</h3>";
        });
        return paragraphHTML;
    }
}

const loremIpsum = new GenerateNewText();

module.exports = loremIpsum;