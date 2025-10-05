export const metadata = {
  title: "| Darwin Garcia | Projects",
   description: "Software and Data Science projects.",
  keywords: 'Data Science, Portfolio, Photographer, PC Builder, YouTuber, Developer, Next.js, React, Tailwind CSS',
};

export default function ExperienceLayout({ children }) {
  return (
    <main className='bg-white px-10 dark:bg-gray-900 md:px-14 lg:px-25'>
        <section className='mb-auto pt-14'>
            <div className='divide-y'>
                <div className='space-y-2 pt-6 pb-8 md:space-y-5 py-4 px-4'>                  
                    <h1 className='text-3xl leading-9 tracking-tight text-gray-900 dark:text-white text-center'>
                      Projects
                    </h1>
                    <p className='text-lg leading-7 text-gray-600 dark:text-gray-400 text-center'> Here you can see my software and data project creations.</p>
                </div>
            </div>
              
        </section>
        {/* 2. El contenido se renderizará aquí */}
        <main>{children}</main>
    </main>
  );
}