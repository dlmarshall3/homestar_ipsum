const loremIpsum = require('./generator.js');
const querystring = require('querystring');
const fs = require('fs');

const express = require('express');
const router = express.Router();

router.get('/', (request,response) => {
    response.setHeader('content-type', 'text/html');
    let fileContents = fs.readFileSync('./public/index.html', {encoding: 'utf8'});
    response.write(fileContents);
    response.end();
});

router.post('/', (request, response) => {
    request.on('data', function(inputValue){
        let query = inputValue.toString();
        let numberOfParagraphs = querystring.parse(query).numberOfParagraphs;
        let loremIpsumText = loremIpsum.getAllParagraphs(numberOfParagraphs);
        let fileContents = fs.readFileSync('./public/index.html', {encoding: 'utf8'});
        fileContents = fileContents.replace('<div class="placeholder-div"></div>', loremIpsumText);
        response.setHeader('content-type', 'text/html');
        response.write(fileContents);
        response.end();
    });
});

module.exports = router;