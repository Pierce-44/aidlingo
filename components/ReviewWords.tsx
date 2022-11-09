import React from "react";
import { SkillData } from "../pages";

interface Props {
  skillData: SkillData | undefined;
  setStartSession: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ReviewWords({ skillData, setStartSession }: Props) {
  const [factor, setFactor] = React.useState(0);

  const widthRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={widthRef}
      className="relative flex h-[calc(100vh-64px)] w-full items-center justify-start overflow-hidden"
    >
      {skillData?.words.map((word, index) => (
        <div
          key={index}
          className="flex w-full shrink-0 flex-col items-center justify-center text-base transition-all duration-700 ease-[cubic-bezier(.5,0,.1,1)] sm:text-4xl"
          style={{
            translate: `calc(${widthRef.current?.offsetWidth} * ${factor}px)`,
          }}
        >
          <p className="border-b-2 border-[#e5e5e5] px-10 pb-10">{word}</p>
          <p className="pt-10">{skillData.translation[index]}</p>
        </div>
      ))}
      <button
        className={`${
          -factor + 1 === skillData?.words.length
            ? "cursor-default text-[#dbdbdb]"
            : "hover:scale-105 hover:text-[#58cc02]"
        } absolute right-0 top-1/2 mr-4 -translate-y-1/2 transform duration-200 sm:mr-20`}
        onClick={() => {
          if (-factor + 1 === skillData?.words.length) {
            return;
          } else {
            setFactor(factor - 1);
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="h-8 w-8 sm:h-20 sm:w-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <button
        className={`${
          factor === 0
            ? "cursor-default text-[#dbdbdb]"
            : "hover:scale-105 hover:text-[#58cc02]"
        } absolute left-0 top-1/2 ml-4 -translate-y-1/2 transform  duration-200 sm:ml-20`}
        onClick={() => {
          if (factor === 0) {
            return;
          } else {
            setFactor(factor + 1);
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="h-8 w-8 sm:h-20 sm:w-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <button
        className="group absolute top-[20px] right-4 flex items-start justify-center gap-4 rounded-lg border-2 border-[#e5e5e5] p-3 text-base hover:border-[#db3e3e4b] sm:top-[80px] sm:right-20 sm:gap-7 sm:text-xl"
        onClick={() => {
          setStartSession(false);
          setFactor(0);
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
    </div>
  );
}
