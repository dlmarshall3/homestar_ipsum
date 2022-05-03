const transcripts = require('./transcripts');

class GenerateNewText {
    constructor() {
        this.sentences = transcripts;
    }
    getRandomSentence() {
        let arrInt = Math.floor(Math.random() * this.sentences.length)+1;
        let randomSentence = this.sentences[arrInt];
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
        console.log(this.sentences.length)
        return paragraphHTML;
    }
}

// function shuffleSentenceIntArray(array){
//     let currentIndex = array.length, randomIndex;
//     while (currentIndex !=0){
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex --;

//         [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
//     }
//     return array;
// }

const homestarIpsum = new GenerateNewText();

module.exports = homestarIpsum;