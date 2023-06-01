import { useEffect, useState } from "react";
import "./App.css";

// break the sentence down to an array of words
// then cycle through each word of the array
// then create another array which will contain the length of each word
// then note down the length of each word inside that array
// then return the highest number from the indices
// then find the corresponding word of the same index in the word array

const App = () => {
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    console.log(inputText);
  }, [inputText]);

  return (
    <div className='container'>
      <div className='question-container'>
        <h1 className='title'>Largest word?</h1>
        <div className='input-container'>
          <input
            className='input-text'
            type='text'
            onChange={(e) => setInputText(e.target.value)}
            placeholder='Enter a sentence here...'
          />
        </div>
      </div>
      <div className='output-container'>
        <h1 className='title'>Output</h1>
        <div className='output'>{output}</div>
      </div>
      <div className='btn-container'>
        <button className='btn' type='button'>
          Check
        </button>
      </div>
    </div>
  );
};

export default App;
