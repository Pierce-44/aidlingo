import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import SelectPracticeType from "../components/SelectPracticeType";
import SkillsSVGs from "../components/SkillsSVGs";
import { skillsData } from "../util/skillsData";

export interface SkillData {
  skillName: string;
  skillImg: string;
  words: string[];
  translation: string[];
}

export default function Home() {
  const [skillData, setSkillData] = React.useState<SkillData>();
  const [openSkill, setOpenSkill] = React.useState(false);

  return (
    <div translate="no">
      <Head>
        <title>Aidlingo</title>
        <meta name="Aidlingo" content="Aidlingo" />
        <link rel="icon" href="/logo.svg.png" />
      </Head>
      <Header />
      {openSkill ? (
        <SelectPracticeType setOpenSkill={setOpenSkill} skillData={skillData} />
      ) : (
        <div className="mx-auto mt-10 mb-20 flex max-w-[270px] flex-wrap items-center justify-center gap-10">
          {skillsData.sectionOne.map((data, index) => (
            <div
              className={
                data.style === "fullWidth"
                  ? "flex w-full flex-col items-center justify-center"
                  : ""
              }
              key={index}
            >
              <div className="group rounded-full border-8 border-[#e5e5e5]">
                <button
                  className="m-2 transform rounded-full bg-gradient-to-bl from-[#c3caff] to-[#a0cdf7] duration-200 group-hover:scale-105"
                  onClick={() => {
                    setSkillData(data);
                    setOpenSkill(true);
                  }}
                >
                  <SkillsSVGs imageName={data.skillImg} />
                </button>
              </div>
              <p className="mt-2 text-center">{data.skillName}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
