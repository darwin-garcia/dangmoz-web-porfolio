import ExperienceItem from "./exp";

export default function Experience() {
    return (
    <main className='bg-white px-10 dark:bg-gray-900 md:px-14 lg:px-25'>
        <section className='mb-auto pt-14'>
          <div className='divide-y'>
              <div className='space-y-2 pt-6 pb-8 md:space-y-5 py-4 px-4'>                                      
                <ExperienceItem />                    
              </div>          
          </div>
        </section>
    </main>
  )
}