import Image from "next/image";
export default function CVPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <section className="flex flex-col items-center text-center py-16">
            <Image
                src="/images/profile/Profile1.jpg"
                alt="Foto de perfil"
                width={150}
                height={150}
                className="rounded-full shadow-lg"
              />
        <h1 className="text-3xl font-bold mt-4">Darwin García</h1>
        <p className="text-gray-600">Desarrollador Full Stack | Next.js | TailwindCSS</p>
        <a
          href="/docs/CV.pdf"
          download
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Descargar PDF
        </a>

        </section>
      </header>

      {/* Sección experiencia */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">
          Experiencia
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold">Desarrollador Full Stack</h3>
            <p className="text-gray-500">Empresa X | 2021 - Presente</p>
            <p className="mt-2">
              Desarrollo de aplicaciones web modernas con React, Next.js y APIs en Node.js.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Frontend Developer</h3>
            <p className="text-gray-500">Startup Y | 2019 - 2021</p>
            <p className="mt-2">
              Implementación de interfaces responsivas con TailwindCSS y consumo de REST APIs.
            </p>
          </div>
        </div>
      </section>

      {/* Sección educación */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">
          Educación
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Ingeniería en Sistemas</strong> – Universidad Z (2015 - 2019)
          </li>
        </ul>
      </section>

      {/* Sección habilidades */}
      <section>
        <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">
          Habilidades
        </h2>
        <div className="flex flex-wrap gap-2">
          {["JavaScript", "React", "Next.js", "TailwindCSS", "Node.js", "SQL"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}