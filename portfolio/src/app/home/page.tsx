// import Image from "next/image";
"use client";
import JobCard from "../components/JobCard";
import ContactSection from "../components/ContactSection";
import SplitText from "@/components/ui/SplitText/SplitText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function Home() {
  return (
    <div className='w-[65%] md:w-[90%] lg:w-[65%] max-w-7xl mx-auto py-10 md:py-20 lg:py-28'>
      <div className='flex flex-col'>
        <SplitText
          text='Harry Song'
          className='text-4xl font-semibold font-mono'
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing={(t) => 1 - Math.pow(1 - t, 3)} // easeOutCubic function
          threshold={0.2}
          rootMargin='-50px'
          textAlign='left'
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <h2 className='font-mono text-xl md:text-2xl'>Full Stack Developer</h2>
        <p className='font-mono text-base md:text-lg pt-6 md:pt-10'>
          Focused on creating performant web experiences.
        </p>
      </div>
      <div className='py-6 md:py-8'>
        <h1 className='font-mono text-xl md:text-2xl font-bold pb-4 md:pb-6'>
          Work Experience
        </h1>
        <JobCard />
      </div>

      <div>
        <h1 className='font-mono text-xl md:text-2xl font-bold'>Connect</h1>
        <ContactSection />
      </div>
    </div>
  );
}
