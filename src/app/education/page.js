import EducationSection from "./section";

export default function Education() {
    return (
    <section className='mb-auto pt-14'>
          <div className='divide-y'>
              <div className='space-y-2 pt-6 pb-8 md:space-y-5 py-4 px-4'>                  
                  <div className='items-stretch space-y-2 xl:grid xl:grid-cols-1 xl:gap-x-8 xl:space-y-0'>
                       <EducationSection />
                  </div>                 
              </div>
          </div>
        </section>
  )
}
