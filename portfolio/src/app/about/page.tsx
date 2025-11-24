"use client";
import React from "react";
import { SkillSlider } from "../components/SkillsSlider";
import IntroCodeEditor from "../components/CodeEditor";
import { TextCard1 } from "./components/TextCard1";
import { TextCard2 } from "./components/TextCard2";
import ContactSection from "../components/ContactSection";
import Particles from "@/components/ui/Particles";

export default function page() {
  return (
    <div className='relative w-full px-4 sm:px-6 md:w-[90%] lg:w-[65%] max-w-7xl mx-auto my-6 sm:my-10 md:my-20 lg:my-28'>
      <div className='absolute inset-0 -z-10 w-full h-full'>
        <Particles
          particleColors={["#0056d6", "#0056d6"]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={150}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <div className='flex flex-col'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold font-mono mb-3 sm:mb-4'>
          About me
        </h1>
        <IntroCodeEditor />
      </div>

      <div className='mt-8 sm:mt-12'>
        <h1 className='font-mono text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4'>
          Skills
        </h1>
        <SkillSlider />
      </div>

      <div className='flex flex-col w-full gap-6 sm:gap-8 mt-8 sm:mt-12'>
        <div className='self-start w-full sm:w-auto'>
          <TextCard1 />
        </div>
        <div className='self-end w-full sm:w-auto'>
          <TextCard2 />
        </div>
      </div>
      <div className='mt-8 sm:mt-12'>
        <h1 className='font-mono text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4'>
          Connect
        </h1>
        <ContactSection />
      </div>
    </div>
  );
}
