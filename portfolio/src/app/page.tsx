// import Image from "next/image";
import JobCard from "./components/JobCard";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-24 xl:px-56 py-10 md:py-20 lg:py-28 max-w-7xl mx-auto'>
      <div className='flex flex-col'>
        <h1 className='font-mono text-2xl md:text-3xl font-bold'>Harry Song</h1>
        <h2 className='font-mono text-xl md:text-2xl'>Full Stack Developer</h2>
        <p className='font-mono text-base md:text-lg pt-6 md:pt-10'>
          Focused on creating performant web experiences.
        </p>
      </div>
      <div className='py-6 md:py-8'>
        <h1 className='font-mono text-xl md:text-2xl font-bold pb-4 md:pb-6'>Work Experience</h1>
        <JobCard />
      </div>

      <div>
        <h1 className='font-mono text-xl md:text-2xl font-bold'>Connect</h1>
        <ContactSection />
      </div>
    </div>
  );
}
