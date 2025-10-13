import AboutCard from "./card";
import AboutResume from "./items/resume/resume";

export default function About() {
  return (
    <div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
      <div className='flex flex-col items-center pt-8'>
        <AboutCard/>
      </div>
      <div className='prose max-w-none pt-3 pb-6 dark:prose-dark xl:col-span-2 dark:text-white'>
        <AboutResume/>                        
      </div>
    </div>
  );
}