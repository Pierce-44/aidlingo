/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { SkillData } from "../pages";
import shuffledGuesses from "../util/shuffledGuesses";

interface Props {
  skillData: SkillData | undefined;
  setStartSession: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GuessIt({ skillData, setStartSession }: Props) {
  const [wordNum, setWordNum] = React.useState(0);
  const [guesses, setGuesses] = React.useState(shuffledGuesses(skillData, 0));
  const [red, setRed] = React.useState(false);

  return (
    <div className="relative flex h-[calc(100vh-64px)] items-center justify-center">
      {wordNum >= skillData!.words.length && (
        <div className="rounded-md bg-[#eeeeee] p-4 text-2xl text-[#58cc02] underline">
          Parabéns
        </div>
      )}
      <button
        className="group  absolute top-[10px] right-4 flex items-start justify-center gap-4 rounded-lg border-2 border-[#e5e5e5] p-3 text-base hover:border-[#db3e3e4b] sm:gap-7 sm:text-xl"
        onClick={() => {
          setStartSession(false);
          setWordNum(0);
          setGuesses(shuffledGuesses(skillData, 0));
        }}
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
      {skillData?.words.map((word, index) => (
        <div
          key={index}
          className={`${
            index === wordNum ? "" : "hidden"
          } flex  flex-col items-center justify-center gap-5`}
        >
          <p
            className={`${
              red ? "scale-110 text-[#ff5555]" : ""
            } transform py-10 text-xl duration-200 sm:text-3xl`}
          >
            {word}
          </p>
          <div className="flex  flex-col items-center justify-center gap-2">
            {guesses.map((translation) => (
              <button
                key={translation}
                className="w-[300px] transform bg-[#eeeeee] py-4 duration-100 hover:scale-110"
                onClick={() => {
                  if (skillData.translation.indexOf(translation) === index) {
                    setGuesses(shuffledGuesses(skillData, index + 1));
                    setWordNum(index + 1);
                  } else {
                    setRed(true);
                    setTimeout(() => setRed(false), 1000);
                  }
                }}
              >
                {translation}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
