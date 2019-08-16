/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Creates a list of quotes with various information

var quotes = [
  {
    quote:'It\'s over 9000!',
    source:'Vegeta',
    tags: 'Cartoon, power level, super saiyan'
  },
  {
    quote:'Ooh, she made us drinks to drink We drunk \'em, got drunk And then I think she thinks I\'m cool...',
    source:'T-Pain',
    year: 2007,
    tags: 'Music, auto-tune'
  },
  {
    quote:'Where\'s the lamb sauce!?',
    source:'Gordon Ramsay',
    citation: 'Youtube',
    tags: 'Television, mean, yelling'
  },
  {
    quote:'I don\'t need it. I don\'t need it. I definitely don\'t need it. I don\'t need it. I don\'t need it. I don\'t need it. I don\'t need it. I... need... it!',
    source:'Spongebob Squarepants',
    tags: 'Cartoon, funny, yellow'
  },
  {
    quote:'Every man must decide whether he will walk in the light of creative altruism or in the darkness of destructive selfishness. ',
    source:'Martin Luther King Jr.',
    tags: 'Politics'
  }
];

// Logs the quotes array to the console

console.log(quotes);

// Selects a random object from the quotes array

function getRandomQuote () {
  var randNum = Math.floor(Math.random() * quotes.length);
  return quotes[randNum];
}

// Generates a random number to be used when updating background color of page

function changeBgColor (){
  var randColor = Math.floor(Math.random() * (150 - 0) );
  return randColor;
}

// Once called prints the quote to the page and changes the background color to a random color

function printQuote () {
  document.body.style.backgroundColor = 'rgb(' + changeBgColor() + ',' + changeBgColor() + ',' + changeBgColor() + ')';;
  var randomQoute = getRandomQuote();
  var message = '';
  message += `<p class="quote">${randomQoute.quote}</p>`
  message += `<p class="source">${randomQoute.source}`;
  if(randomQoute.citation){
    message+= `<span class="citation">${randomQoute.citation}</span>`;
  }
  else if(randomQoute.year){
    message+= `<span class="year">${randomQoute.year}</span>`;
  }
  message += `</p>`;

  if(randomQoute.tags){
    message+= `<p class="tags">Tags: <i>${randomQoute.tags}</i></p>`;
  }

  document.getElementById('quote-box').innerHTML = message;
}

// Changes the quote and background color every 5 seconds

setInterval(function(){printQuote()}, 5000);

// When a user clicks the Show another quote button the quote on the page will change

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
