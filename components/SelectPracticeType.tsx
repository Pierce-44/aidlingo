import React from "react";
import { SkillData } from "../pages";
import GuessIt from "./GuessIt";
import PairIt from "./PairIt";
import ReviewWords from "./ReviewWords";
import TypeIt from "./TypeIt";

interface Props {
  skillData: SkillData | undefined;
  setOpenSkill: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SelectPracticeType({ setOpenSkill, skillData }: Props) {
  const [startSession, setStartSession] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const games = [
    ReviewWords({ skillData, setStartSession }),
    PairIt({ skillData, setStartSession }),
    TypeIt({ skillData, setStartSession }),
    GuessIt({ skillData, setStartSession }),
  ];

  return (
    <div>
      {startSession ? (
        games[index]
      ) : (
        <div className="flex h-[calc(100vh-64px)] w-full items-center justify-center">
          <div className="flex flex-col items-center justify-between gap-6 rounded-md border-2 border-[#e5e5e5] bg-[#eeeeee] p-4 text-[#181818]">
            <button
              className="group flex w-full items-center justify-between gap-10"
              onClick={() => {
                setStartSession(true);
                setIndex(0);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 transform duration-200 group-hover:scale-125 group-hover:text-[#58cc02]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
              Review Words
              <div></div>
            </button>
            <button
              className="group flex w-full items-center justify-between gap-10"
              onClick={() => {
                setStartSession(true);
                setIndex(1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 transform duration-200 group-hover:scale-125 group-hover:text-[#58cc02]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
              Pair It
              <div></div>
            </button>
            <button
              className="group flex w-full items-center justify-between gap-10"
              onClick={() => {
                setStartSession(true);
                setIndex(2);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 transform duration-200 group-hover:scale-125 group-hover:text-[#58cc02]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Type It
              <div></div>
            </button>
            <button
              className="group flex w-full items-center justify-between gap-10"
              onClick={() => {
                setStartSession(true);
                setIndex(3);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 transform duration-200 group-hover:scale-125 group-hover:text-[#58cc02]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
              Guess It
              <div></div>
            </button>
            <button
              className="group mt-4 flex w-full items-center justify-between gap-10 border-t-2 border-[#e5e5e5] pt-2"
              onClick={() => setOpenSkill(false)}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
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
              <div></div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
