const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newBtn = document.getElementById('new-quote');
const tweetBtn = document.getElementById('tweet');

const APIURL = 'https://type.fit/api/quotes';
let quotes = [];

//function to choose a new quote
function newQuote() {
    //choose a random quote
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    if(!quote.author) {
        quoteAuthor.textContent = "UNKNOWN";
    }
    else {
        quoteAuthor.textContent = quote.author;
    }
    quoteText.textContent = quote.text;
}
//function to tweet Quote
function tweetQuote() {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(tweetUrl, '_blank');
}
//function to fetch quotes
async function getQuotes() {
    try {
        const response = await fetch(APIURL);
        quotes = await response.json();
    }
    catch(error) {
        alert(error.message);
    }
}

//on load
getQuotes();


//add event listeners
newBtn.addEventListener('click', newQuote);
tweetBtn.addEventListener('click', tweetQuote);