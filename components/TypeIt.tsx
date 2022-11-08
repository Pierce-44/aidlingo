/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { SkillData } from "../pages";

interface Props {
  skillData: SkillData | undefined;
  setStartSession: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TypeIt({ skillData, setStartSession }: Props) {
  const [wordNum, setWordNum] = React.useState(0);
  const [word, setWord] = React.useState("");
  const [red, setRed] = React.useState(false);
  const [finished, setFinished] = React.useState(false);

  function handleCheck(e: any) {
    e.preventDefault();

    if (word === skillData?.words[wordNum]) {
      setWordNum(wordNum + 1);
      setWord("");

      if (wordNum + 1 === skillData.words.length) {
        setFinished(true);
      }
    } else {
      setRed(true);
      setTimeout(() => setRed(false), 1000);
    }
  }

  return (
    <div className="relative flex h-[calc(100vh-64px)] flex-col items-center justify-center gap-5">
      <button
        className="group  absolute top-[10px] right-4 flex items-start justify-center gap-4 rounded-lg border-2 border-[#e5e5e5] p-3 text-base hover:border-[#db3e3e4b] sm:gap-7 sm:text-xl"
        onClick={() => {
          setStartSession(false);
          setWordNum(0);
          setWord("");
          setFinished(false);
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
      {finished ? (
        <div className="rounded-md bg-[#eeeeee] p-4 text-2xl text-[#58cc02] underline">
          Parabéns
        </div>
      ) : (
        <div>
          <div>
            {skillData?.translation.map((word, index) =>
              index === wordNum ? (
                <p
                  key={index}
                  className="flex h-[200px] w-[300px] items-center justify-center rounded-md bg-[#eeeeee]"
                >
                  {word}
                </p>
              ) : (
                ""
              )
            )}
          </div>
          <form
            onSubmit={(e) => handleCheck(e)}
            className="mt-5 flex h-[200px] w-[300px] flex-col items-center justify-evenly rounded-md bg-[#eeeeee]"
          >
            <input
              className={`${
                red ? "bg-[#ff5555]" : "bg-[#f7f7f7]"
              } rounded-md border-b-2  border-[#e5e5e5] text-center	focus:border-[#2cff5a] focus:outline-0`}
              type="text"
              value={word}
              placeholder="digite aqui"
              onChange={(e) => setWord(e.target.value)}
            />
            <button
              className="group flex items-center justify-center gap-3"
              type="submit"
            >
              Verifique
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 transform duration-150 group-hover:scale-125 group-hover:text-[#58cc02]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
