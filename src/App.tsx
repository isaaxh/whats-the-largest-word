import { useEffect, useState } from "react";
import "./App.css";

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
    breakStringIntoArray(inputText);
  }, [inputText]);

  useEffect(() => {
    findNumOfChar(wordArr);
  }, [wordArr]);

  const handleBtnClick = (str: string) => {
    if (wordArr.length !== 0 && numOfChar.length !== 0) {
      findTheLargestWord(wordArr, numOfChar);
    }

    // const longestWord = theLargestWord(str);
    // setOutput(`The largest word is "${longestWord}"`);
  };

  // const theLargestWord = (str: string): string => {
  //   const strArr: string[] = str.split(" ");
  //   let largestNumOfChar = 0;
  //   let word = "";

  //   for (let i = 0; i < strArr.length; i++) {
  //     if (largestNumOfChar < strArr[i].length) {
  //       largestNumOfChar = strArr[i].length;
  //       word = strArr[i];
  //     }
  //   }
  //   return word;
  // };

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
        <button
          className='btn'
          type='button'
          onClick={() => handleBtnClick(inputText)}
        >
          Check
        </button>
      </div>
    </div>
  );
};

export default App;
