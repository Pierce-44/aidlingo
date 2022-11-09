/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { SkillData } from "../pages";

export default function shuffledGuesses(
  skillData: SkillData | undefined,
  index: number
) {
  const arrayCopy = [...skillData!.translation];

  arrayCopy.splice(index, 1);
  arrayCopy.sort(() => 0.5 - Math.random());

  const firstGuesses = arrayCopy.slice(0, 5);

  firstGuesses.push(skillData!.translation[index]);
  firstGuesses.sort(() => 0.5 - Math.random());

  return [...firstGuesses];
}
