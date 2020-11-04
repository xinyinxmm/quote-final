import React, { useState } from "react";
import "./styles.css";
import { QuoteBox } from "./QuoteBox";

const initialQuote = [
  { text: "Dream big and dare to fail.", author: "-Norman Vaughan" },
  {
    text:
      "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    author: "-Dalai Lama"
  },
  { text: "You become what you believe.", author: "-Oprah Winfrey" }
];

export default function App() {
  const [quote, setQuote] = useState(initialQuote);
  return <QuoteBox quote={quote} setQuote={setQuote} />;
}
