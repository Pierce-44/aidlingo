/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { SkillData } from "../pages";

interface Props {
  skillData: SkillData | undefined;
  setStartSession: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PairIt({ skillData, setStartSession }: Props) {
  const [check, setCheck] = React.useState(false);
  const [wordToCheck, setWordToCheck] = React.useState("");
  const [shuffleIndex, setShuffleIndex] = React.useState(0);

  const words = [...skillData!.words];
  const translations = [...skillData!.translation];

  const [shuffledWords, setShuffledWords] = React.useState(
    words.sort(() => Math.random() - 0.5)
  );
  const [shuffledTranslations, setShuffledTranslations] = React.useState(
    translations.sort(() => Math.random() - 0.5)
  );

  function hanldeCheckPair(
    e: any,
    origionalArray: string[],
    thisOrigionalArray: string[],
    index: number,
    otherArray: string[],
    setOtherArray: React.Dispatch<React.SetStateAction<string[]>>,
    thisArray: string[],
    setThisArray: React.Dispatch<React.SetStateAction<string[]>>
  ) {
    if (check === false) {
      setCheck(true);
      setWordToCheck(e.target.id);
      setShuffleIndex(index);
      return;
    }

    const origionalIndex = origionalArray.indexOf(wordToCheck);
    const thisWordOrigionalIndex = thisOrigionalArray.indexOf(e.target.id);

    if (
      origionalIndex === thisWordOrigionalIndex &&
      origionalIndex !== -1 &&
      thisWordOrigionalIndex !== -1
    ) {
      const otherCopy = [...otherArray];
      const thisCopy = [...thisArray];

      otherCopy[shuffleIndex] = "";
      thisCopy[index] = "";
      setCheck(false);
      setWordToCheck("filler");
      setOtherArray(otherCopy);
      setThisArray(thisCopy);
    }
  }

  return (
    <div className="mt-5 mb-20 flex flex-col items-center justify-center gap-5">
      <button
        className="group flex items-start justify-center gap-4 rounded-lg border-2 border-[#e5e5e5] p-3 text-base hover:border-[#db3e3e4b] sm:top-[80px] sm:right-20 sm:gap-7 sm:text-xl"
        onClick={() => setStartSession(false)}
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6 transform duration-200 group-hover:scale-125 group-hover:text-[#db3e3e]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
        Return
      </button>
      <div className="flex items-center justify-center gap-5">
        <div className="flex flex-col gap-4">
          {shuffledWords.map((word, index) => (
            <button
              className={`${word === "" ? "" : "bg-[#eeeeee]"} ${
                word === wordToCheck ? "bg-[#2cff5a]" : ""
              } h-20 min-w-[150px] transform rounded-md p-4 duration-100 hover:scale-105`}
              id={word}
              onClick={(e) =>
                hanldeCheckPair(
                  e,
                  skillData!.translation,
                  skillData!.words,
                  index,
                  shuffledTranslations,
                  setShuffledTranslations,
                  shuffledWords,
                  setShuffledWords
                )
              }
              key={index}
            >
              {word}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {shuffledTranslations.map((word, index) => (
            <button
              className={`${word === "" ? "" : "bg-[#eeeeee]"} ${
                word === wordToCheck ? "bg-[#2cff5a]" : ""
              } h-20 min-w-[150px] transform rounded-md p-4 duration-100 hover:scale-105`}
              id={word}
              onClick={(e) =>
                hanldeCheckPair(
                  e,
                  skillData!.words,
                  skillData!.translation,
                  index,
                  shuffledWords,
                  setShuffledWords,
                  shuffledTranslations,
                  setShuffledTranslations
                )
              }
              key={index}
            >
              {word}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
