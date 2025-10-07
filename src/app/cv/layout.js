export const metadata = {
  title: 'CV de Darwin García',
  description: 'Mi Curriculum Vitae profesional',
};

export default function CVLayout({ children }) {
  return (
    <main className='bg-white px-10 dark:bg-gray-900 md:px-14 lg:px-25'>
        <section className='mb-auto pt-14'>
            <div className='divide-y'>
                <div className='space-y-2 pt-6 pb-8 md:space-y-5 py-4 px-4'>                  
                    <h1 className='text-3xl leading-9 tracking-tight text-gray-900 dark:text-white text-center'>
                      Curriculum Vitae
                    </h1>
                </div>
            </div>
              
        </section>
        {/* 2. El contenido se renderizará aquí */}
        <main>{children}</main>
    </main>

  );
}