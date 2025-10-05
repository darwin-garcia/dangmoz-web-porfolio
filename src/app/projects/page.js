import ProjectSection from "./section";

export default function Projects() {
  return (
    <main className='bg-white px-10 dark:bg-gray-900 md:px-14 lg:px-25'>
        <section className='mb-auto pt-14'>
          <div className='divide-y divide-gray-200 dark:divide-gray-700'>
            <ProjectSection />            
          </div>
        </section>
    </main>
  );
}