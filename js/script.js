/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

var quotes = [
  {
    quote:'It\'s over 9000!',
    source:'Vegeta'
  },
  {
    quote:'Ooh, she made us drinks to drink We drunk \'em, got drunk And then I think she thinks I\'m cool...',
    source:'T-Pain',
    year: 2007
  },
  {
    quote:'Where\'s the lamb sauce!?',
    source:'Gordon Ramsay',
    citation: 'https://www.youtube.com/watch?v=-rLtbtvR9lg'
  },
  {
    quote:'I don\'t need it. I don\'t need it. I definitely don\'t need it. I don\'t need it. I don\'t need it. I don\'t need it. I don\'t need it. I... need... it!',
    source:'Spongebob Squarepants',
  },
  {
    quote:'Every man must decide whether he will walk in the light of creative altruism or in the darkness of destructive selfishness. ',
    source:'Martin Luther King Jr.',
  }
];

console.log(quotes);


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote () {
  var randNum = Math.floor(Math.random() * quotes.length);
  return quotes[randNum];
}


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function changeBgColor (){
  var randColor = Math.floor(Math.random() * (255 - 0) );
  return randColor;
}

function printQuote () {
  document.body.style.backgroundColor = 'rgb(' + changeBgColor() + ',' + changeBgColor() + ',' + changeBgColor() + ')';;
  var randomQoute = getRandomQuote();
  var message = '';
  message += `<p class="quote">${randomQoute.quote}</p>`
  message += `<p class="source">${randomQoute.source}</p>`
  if(randomQoute.citation){
    message+= `<p class="citation">${randomQoute.citation}</p>`
  }
  if(randomQoute.year){
    message+= `<p class="year">${randomQoute.year}</p>`
  }
  document.getElementById('quote-box').innerHTML = message;
}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.