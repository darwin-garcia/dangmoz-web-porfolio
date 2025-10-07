import Image from "next/image";
export default function CVPage() {
  return (
    <main className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      {/*
        Grid principal que define las columnas.
        - En móviles (por defecto): 1 columna (grid-cols-1)
        - En pantallas medianas o más grandes (md:): 3 columnas (grid-cols-3)
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* --- COLUMNA IZQUIERDA (30%) --- */}
        {/*
          - Ocupa toda la fila en móviles.
          - En pantallas md y superiores: ocupa 1 de las 3 columnas (col-span-1)
        */}
        <aside className="md:col-span-1">
          <section className="text-center">
            <Image
                src="/images/profile/Profile1.jpg"
                alt="Foto de perfil"
                width={180}
                height={180}
                className="rounded-full shadow-lg mx-auto"
              />
            <h1 className="text-3xl font-raleway font-bold mt-4">Darwin García</h1>
            <p className="text-gray-600 font-lato">Desarrollador Full Stack</p>
            <a
              href="/docs/CV.pdf"
              download
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
            >
              Descargar PDF
            </a>
          </section>

          {/* Sección habilidades en la columna izquierda */}
          <section className="mt-10">
            <h2 className="text-2xl font-raleway font-semibold border-b-2 border-blue-500 pb-2 mb-4">
              Habilidades
            </h2>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {["JavaScript", "React", "Next.js", "TailwindCSS", "Node.js", "SQL"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-lato"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </aside>

        {/* --- COLUMNA DERECHA (70%) --- */}
        {/*
          - Ocupa toda la fila en móviles.
          - En pantallas md y superiores: ocupa 2 de las 3 columnas (col-span-2)
        */}
        <div className="md:col-span-2">
          {/* Sección experiencia */}
          <section className="mb-10">
            <h2 className="text-2xl font-raleway font-semibold border-b-2 border-blue-500 pb-2 mb-4">
              Experiencia
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-raleway font-bold">Desarrollador Full Stack</h3>
                <p className="text-gray-500 font-lato">Empresa X | 2021 - Presente</p>
                <p className="mt-2 font-lato">
                  Desarrollo de aplicaciones web modernas con React, Next.js y APIs en Node.js.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-raleway font-bold">Frontend Developer</h3>
                <p className="text-gray-500 font-lato">Startup Y | 2019 - 2021</p>
                <p className="mt-2 font-lato">
                  Implementación de interfaces responsivas con TailwindCSS y consumo de REST APIs.
                </p>
              </div>
            </div>
          </section>

          {/* Sección educación */}
          <section>
            <h2 className="text-2xl font-raleway font-semibold border-b-2 border-blue-500 pb-2 mb-4">
              Educación
            </h2>
            <ul className="list-disc list-inside space-y-2 font-lato">
              <li>
                <strong>Ingeniería en Sistemas</strong> – Universidad Z (2015 - 2019)
              </li>
            </ul>
          </section>
        </div>

      </div>
    </main>
  );
}