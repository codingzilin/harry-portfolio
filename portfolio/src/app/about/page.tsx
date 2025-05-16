import React from "react";
import { SkillSlider } from "../components/SkillsSlider";
import IntroCodeEditor from "../components/CodeEditor";
import { TextCard1 } from "./components/TextCard1";
import { TextCard2 } from "./components/TextCard2";

export default function page() {
  return (
    <div className='w-[65%] md:w-[90%] lg:w-[65%] max-w-7xl mx-auto py-10 md:py-20 lg:py-28'>
      {/* About me 区块 */}
      <div className='flex flex-col'>
        <h1 className='text-4xl font-semibold font-mono mb-4'>About me</h1>
        <IntroCodeEditor />
      </div>

      {/* Skills 区块 */}
      <div className='mt-12'>
        <h1 className='font-mono text-xl md:text-2xl font-bold mb-4'>Skills</h1>
        <SkillSlider />
      </div>

      {/* 两个卡片区块 */}
      <div className='flex flex-col w-full gap-8 mt-12'>
        <div className='self-start'>
          <TextCard1 />
        </div>
        <div className='self-end'>
          <TextCard2 />
        </div>
      </div>
    </div>
  );
}
