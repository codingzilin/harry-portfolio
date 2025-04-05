// import Image from "next/image";
import JobCard from "./components/JobCard";

export default function Home() {
  return (
    <div className='px-56 py-28'>
      <div className='flex flex-col'>
        <h1 className='font-mono text-3xl font-bold'>Harry Song</h1>
        <h2 className='font-mono text-2xl'>Full Stack Developer</h2>
        <p className='font-mono text-lg pt-10'>
          Focused on creating performant web experiences.
        </p>
      </div>
      <div className='py-8'>
        <h1 className='font-mono text-2xl font-bold pb-6'>Work Experience</h1>
        <JobCard />
      </div>

      <div>
        <h1 className='font-mono text-2xl font-bold'>Connect</h1>
      </div>
    </div>
  );
}
