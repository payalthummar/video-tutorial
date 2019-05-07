const quotes = [
    {
        name:'Sandip Maheshwari',
        quote:'The biggest disease, what will people say'
    },
    {
        name:'Kajal Oja',
        quote:'never go back to make future'
    },
    {
        name:'Abraham Lincoln',
        quote:'I´m a success today because I had a friend who believed in me and I didn´t have the heart to let him down'
    },
    {
        name:'Leo Tolstoy',
        quote:'If you want to be happy,be.'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    //console.log(number);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}

/*const simpleQuotes = [
{
    name:'author number 1',
    quote:'quote number 1'
},
{
    name:'author number 1',
    quote:'quote number 1'
},
]*/