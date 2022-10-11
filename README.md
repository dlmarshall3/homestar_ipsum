Homestar Ipsum Generator
-----------------

The long and short of it is after a few of my friends and I talked about how funny it'd be to see a Homestar Runner "lorem ipsum" generator, I decided to figure out how to make one. Thanks to an incredibly helpful tutorial, I was able to throw this app together in an evening, much to the delight of our group chat. However, the difficulty comes from copying and pasting every line of email and cartoon dialogue from the website. Currently sitting at ~40 emails, and over 1000 different lines of dialogue.

<strong>The npm package can be found and installed here: https://github.com/dlmarshall3/homestar-ipsum-npm</strong>

The code itself
----------------
Pretty straightforward: the app is served up via Node, and loops through the transcripts.js file, which holds all of the dialogue. From there, I have a function that randomly selects a sentence, and after it hits the character requirement, it puts all of the sentences together to form a sentence. Lather, rinse, repeat!

How to use it
----------------
Choose how many paragraphs you'd like to see, and hit submit! Pretty easy!

Generic Disclaimer
----------------
I'm not associated with the official Homestar Runner website or the Brothers Chaps, but if you can manage to get this in front of their eyeballs somehow, that'd be awesome!

