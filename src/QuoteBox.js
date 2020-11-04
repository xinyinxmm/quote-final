import React, { useState } from "react";

const initialQuote = [
  { text: '"Dream big and dare to fail."', author: "-Norman Vaughan" },
  {
    text: '"Only a life lived for others is a life worthwhile."',
    author: "-Albert Einstein"
  },
  { text: '"You become what you believe."', author: "-Oprah Winfrey" }
];

const getRandomIndex = () => {
  return Math.floor(Math.random() * Math.floor(3));
};

export function QuoteBox() {
  const [quote, setQuote] = useState(initialQuote[1]);

  return (
    <div id="container">
      <div id="quote-box">
        <span id="text">{quote.text}</span>
        <span id="author">{quote.author}</span>
        <button
          id="new-quote"
          onClick={() => {
            // get the current index.
            // get the new index.
            // 1,get the index.
            // 2,get the quote.
            // set newquote;
            const currentIndex = initialQuote.findIndex(
              (item) => item.text === quote.text
            );

            let newIndex = getRandomIndex();

            let isSame = currentIndex === newIndex;
            while (isSame) {
              newIndex = getRandomIndex();
              if (currentIndex !== newIndex) {
                isSame = false;
              }
            }

            const newQuote = initialQuote[newIndex];
            setQuote(newQuote);
          }}
        >
          New quote
        </button>
        <a id="tweet-quote" href="twitter.com/intent/tweet">
          tweet it.
        </a>
      </div>
    </div>
  );
}
