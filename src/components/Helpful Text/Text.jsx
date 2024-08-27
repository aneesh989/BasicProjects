import React, { useState } from "react";
import "./text.css";
import "../Buttons/Button.css";

const Text = () => {
  const [text, setText] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(0.85); // Placeholder exchange rate for USD to EUR
  const [amount, setAmount] = useState(1);

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
  };

  const handleCapitalizeClick = () => {
    setText(text.replace(/\b\w/g, (c) => c.toUpperCase()));
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
  };

  const handleReverseClick = () => {
    setText(text.split("").reverse().join(""));
  };

  const handleRemoveDuplicatesClick = () => {
    const words = text.split(" ");
    const uniqueWords = [...new Set(words)];
    setText(uniqueWords.join(" "));
  };

  const handleRandomizeClick = () => {
    const words = text.split(" ");
    const randomizedWords = [...words].sort(() => Math.random() - 0.5);
    setText(randomizedWords.join(" "));
  };

  const handleAddPrefixSuffixClick = () => {
    const prefix = prompt("Enter the prefix:");
    const suffix = prompt("Enter the suffix:");
    const modifiedWords = text.split(" ").map((word) => prefix + word + suffix);
    setText(modifiedWords.join(" "));
  };

  const handleEmojiConversionClick = () => {
    const emojiMap = {
      ":)": "😄",
      ":(": "😞",
    };
    let newText = text;

    for (const [key, value] of Object.entries(emojiMap)) {
      newText = newText.replace(new RegExp(key, "g"), value);
    }

    setText(newText);
  };

  const Clear = () => {
    setText("");
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleToggleChange = () => {
    if (currency === "USD") {
      setCurrency("EUR");
      setExchangeRate(1 / 0.85); // Convert to EUR to USD rate
    } else {
      setCurrency("USD");
      setExchangeRate(0.85); // Convert to USD to EUR rate
    }
  };

  const handleFindReplaceClick = () => {
    const findWord = prompt("Enter the word to find:");
    const replaceWord = prompt("Enter the word to replace with:");
    setText(text.replace(new RegExp(findWord, "g"), replaceWord));
  };

  const handleTrimSpacesClick = () => {
    setText(text.trim());
  };

  const handleRemovePunctuationClick = () => {
    setText(text.replace(/[.,/#!$%^&*;:{}=_`~()]/g, ""));
  };

  const handleWordCountClick = () => {
    const word = prompt("Enter the word to count:");
    const wordCount = text.split(" ").filter(w => w === word).length;
    alert(`The word "${word}" appears ${wordCount} times.`);
  };

  const handleRemoveVowelsClick = () => {
    setText(text.replace(/[aeiouAEIOU]/g, ""));
  };

  const handleCountSentencesClick = () => {
    const sentenceCount = text.split(/[.!?]/).filter(sentence => sentence.trim().length > 0).length;
    alert(`The text contains ${sentenceCount} sentences.`);
  };

  const handleCountParagraphsClick = () => {
    const paragraphCount = text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0).length;
    alert(`The text contains ${paragraphCount} paragraphs.`);
  };

  const handleRemoveExtraSpacesClick = () => {
    setText(text.replace(/\s+/g, ' ').trim());
  };

  const handleTitleCaseClick = () => {
    setText(text.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()));
  };

  const handleReplaceSpacesWithUnderscoresClick = () => {
    setText(text.replace(/\s+/g, '_'));
  };

  const convertedAmount = (parseFloat(amount) * exchangeRate).toFixed(2);

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <input
          className="border p-2 w-full lg:w-1/2 rounded-md text-lg mb-4"
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter your text..."
        />
      </div>
      <div className="grid grid-cols-1 space-y-20 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <span></span>
        <button className="_btn" onClick={handleUpClick} type="button">
          Convert to Uppercase
        </button>
        <button className="_btn" onClick={handleLoClick} type="button">
          Convert to Lowercase
        </button>
        <button className="_btn" onClick={handleCapitalizeClick} type="button">
          Convert to Capitalized Case
        </button>
        <button className="_btn" onClick={handleCopyClick} type="button">
          Copy
        </button>
        <button className="_btn" onClick={handleReverseClick} type="button">
          Reverse Text
        </button>
        <button className="_btn" onClick={handleRemoveDuplicatesClick} type="button">
          Remove Duplicates
        </button>
        <button className="_btn" onClick={handleRandomizeClick} type="button">
          Randomize
        </button>
        <button className="_btn" onClick={handleAddPrefixSuffixClick} type="button">
          Add Prefix/Suffix
        </button>
        <button className="_btn" onClick={handleEmojiConversionClick} type="button">
          Emoji Conversion
        </button>
        <button className="_btn" onClick={handleFindReplaceClick} type="button">
          Find & Replace
        </button>
        <button className="_btn" onClick={handleTrimSpacesClick} type="button">
          Trim Spaces
        </button>
        <button className="_btn" onClick={handleRemovePunctuationClick} type="button">
          Remove Punctuation
        </button>
        <button className="_btn" onClick={handleWordCountClick} type="button">
          Count Word
        </button>
        <button className="_btn" onClick={handleRemoveVowelsClick} type="button">
          Remove Vowels
        </button>
        <button className="_btn" onClick={handleCountSentencesClick} type="button">
          Count Sentences
        </button>
        <button className="_btn" onClick={handleCountParagraphsClick} type="button">
          Count Paragraphs
        </button>
        <button className="_btn" onClick={handleRemoveExtraSpacesClick} type="button">
          Remove Extra Spaces
        </button>
        <button className="_btn" onClick={handleTitleCaseClick} type="button">
          Convert to Title Case
        </button>
        <button className="_btn" onClick={handleReplaceSpacesWithUnderscoresClick} type="button">
          Replace Spaces with Underscores
        </button>
      </div>
      <button className="_btn mb-6" onClick={Clear} type="button">
        Clear
      </button>
      <div className="mt-4">
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter(word => word.length > 0).length} words and {text.length} characters</p>
      </div>
      <div className="flex h-screen justify-center items-center bg-gray-100 mt-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Currency Converter</h1>
          <div className="mb-4">
            <input
              className="border p-2 rounded-md w-24"
              type="number"
              value={amount}
              onChange={handleAmountChange}
            />
            <span className="text-xl mx-2">
              {currency} to {currency === "USD" ? "EUR" : "USD"}
            </span>
            <div className="toggle-button-cover mt-4">
              <div className="button r" id="button-3">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={currency === "EUR"}
                  onChange={handleToggleChange}
                />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          </div>
          <p className="text-xl">
            {amount} {currency} is approximately {convertedAmount}{" "}
            {currency === "USD" ? "EUR" : "USD"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Text;
