var arrayOfQuotes = [
    {
        "author":"Dalai Lama",
        "quote":"The purpose of our lives is to be happy."
    },

    {
        "author":"John Lennon",
        "quote":"Life is what happens when you’re busy making other plans."
    },

    {
        "author":"Mae West",
        "quote":"You only live once, but if you do it right, once is enough."
    },

    {
        "author":"Thomas A. Edison",
        "quote":"Many of life’s failures are people who did not realize how close they were to success when they gave up."
    },

    {
        "author":"Albert Einstein",
        "quote":"If you want to live a happy life, tie it to a goal, not to people or things."
    },

    {
        "author":"Henry Ford",
        "quote":"The whole secret of a successful life is to find out what is one’s destiny to do, and then do it."
    },

    {
        "author":"Frank Sinatra",
        "quote":"The big lesson in life, baby, is never be scared of anyone or anything."
    },

    {
        "author":"Eleanor Roosevelt",
        "quote":"If life were predictable it would cease to be life, and be without flavor."
    },

    {
        "author":"Soren Kierkegaard",
        "quote":"Life is not a problem to be solved, but a reality to be experienced."
    },

    {
        "author":"Hillary Clinton",
        "quote":"Do all the good you can, for all the people you can, in all the ways you can, as long as you can."
    },


    {
        "author":"Celine Dion",
        "quote":"Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this."
    },


    {
        "author":"Albert Einstein",
        "quote":"Life is like riding a bicycle. To keep your balance, you must keep moving."
    },


    {
        "author":"Helen Keller",
        "quote":"When we do the best we can, we never know what miracle is wrought in our life or the life of another."
    },


    {
        "author":"Charles Swindoll",
        "quote":"Life is ten percent what happens to you and ninety percent how you respond to it.”"
    },



    {
        "author":"Ralph Waldo Emerson",
        "quote":"Live in the sunshine, swim the sea, drink the wild air."
    },



    {
        "author":"Bill Clinton.",
        "quote":"If you live long enough, you’ll make mistakes. But if you learn from them, you’ll be a better person."
    },


    {
        "author":"Mahatma Gandhi",
        "quote":"Live as if you were to die tomorrow. Learn as if you were to live forever."
    }

]

function randomSelector(arrayLength){
    return Math.floor(Math.random()*arrayLength);
}
function generateQuote(){
    var randomNumber = randomSelector(arrayOfQuotes.length);

    document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';
    document.getElementById("authorOutput").innerHTML = '- ' + arrayOfQuotes[randomNumber].author;

}