import Image from "next/image";
import JobCard from "./components/JobCard";



export default function Home() {
  return (
    <><div className='flex flex-col'>
      <h1>Harry Song</h1>
      <h2>Full Stack Developer</h2>
      <p>Focused on creating performant web experiences.</p>
    </div>
    <div>
      <h1>Work Experience</h1>
      <JobCard />
    </div>
    
    <div>
      <h1>Connect</h1>
    </div>
    </>
  );
}
