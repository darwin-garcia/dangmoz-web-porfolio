import ProjectItem1 from "./Items/Item1";
import ProjectItem2 from "./Items/Item2";
import ProjectItem3 from "./Items/Item3";
export default function ProjectSection() {
  return (
    <section className='items-start space-y-2 xl:grid xl:grid-cols-3  xl:gap-x-8 xl:space-y-0'>
        <ProjectItem1 />
        <ProjectItem2 />
        <ProjectItem3 />        
    </section>
  );
}