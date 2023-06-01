import { useEffect, useState } from "react";
import "./App.css";
import { logEvent } from "firebase/analytics";

// break the sentence down to an array of words - done
// then cycle through each word of the array - done
// then create another array which will contain the length of each word - done
// then note down the length of each word inside that array - done
// then return the highest number from the indices
// then find the corresponding word of the same index in the word array

const App = () => {
  const [inputText, setInputText] = useState<string>("");
  const [wordArr, setWordArr] = useState<string[]>([]);
  const [numOfChar, setNumOfChar] = useState<number[]>([]);
  const [output, setOutput] = useState<string>("");

  const breakStringIntoArray = (str: string) => {
    const newArr = str.split(" ");

    setWordArr(newArr);
  };

  const findNumOfChar = (arrOfWord: string[]) => {
    const newArr: number[] = [];
    arrOfWord.forEach((word) => {
      newArr.push(word.length);
    });

    setNumOfChar(newArr);
  };

  const findTheLargestWord = (arrOfWord: string[], arrOfCharNum: number[]) => {
    const largestNum = Math.max.apply(Math, arrOfCharNum);
    const indexOfLargestNum = arrOfCharNum.indexOf(largestNum);

    const largestWord = arrOfWord[indexOfLargestNum];

    setOutput(`The largest word is "${largestWord}"`);
  };

  useEffect(() => {
    // console.log(inputText);
    breakStringIntoArray(inputText);
  }, [inputText]);

  useEffect(() => {
    // console.log(wordArr);
    findNumOfChar(wordArr);
  }, [wordArr]);

  const handleBtnClick = () => {
    if (wordArr.length !== 0 && numOfChar.length !== 0) {
      findTheLargestWord(wordArr, numOfChar);
    }
  };

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
        <button className='btn' type='button' onClick={handleBtnClick}>
          Check
        </button>
      </div>
    </div>
  );
};

export default App;
