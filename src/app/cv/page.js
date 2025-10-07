import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faMapPin, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const ImgUser = '/images/profile/Profile1.jpg'
const CVRoute = '/docs/CV.pdf'

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
                src={ImgUser}
                alt="Photo-Profile"
                width={180}
                height={180}
                className="rounded-full shadow-lg mx-auto"
              />
            <h1 className="text-3xl font-raleway font-bold mt-4">Darwin García</h1>
            <p className="text-gray-600 font-lato">Data Scientist</p>
            <Link
              href={CVRoute}
              download
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
            >
              <FontAwesomeIcon icon = {faDownload} className="text-xl" /> Download PDF
            </Link>
          </section>
          {/* Sección habilidades en la columna izquierda */}
          <section className="mt-10">
            <ul>
              <li><FontAwesomeIcon icon = {faWhatsapp} className="text-sm" /> 3104600220</li>
              <li><FontAwesomeIcon icon = {faEnvelope} className="text-sm" /> darwin_garcia@me.com</li>
              <li><FontAwesomeIcon icon = {faMapPin} className="text-sm" /> Bogota (Colombia)</li>
            </ul>
          </section>
          {/* Sección habilidades en la columna izquierda */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {["Python", "SQL", "Git", "Linux", "PowerBI", "Excel"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
          {/* Sección idiomas en la columna izquierda */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">
              Language
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>English</strong> – IELTS B2
              </li>
              <li>
                <strong>Spanish</strong> – Native
              </li>
            </ul>
          </section>
        </aside>

        {/* --- COLUMNA DERECHA (70%) --- */}
        {/*
          - Ocupa toda la fila en móviles.
          - En pantallas md y superiores: ocupa 2 de las 3 columnas (col-span-2)
        */}

        <div className="md:col-span-2">
          {/* Sección Perfil Profesional */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">
              Profile
            </h2>
            <div className="space-y-6">
              <p>
                Hola!
              </p>
            </div>
          </section>
          {/* Sección experiencia */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">
              Experience
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold">Data Scientist</h3>
                <p className="text-gray-500">Adeodato | 2025 - Current</p>
                <p className="mt-2">
                  Data Professional CEO and Leader.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Data Analyst</h3>
                <p className="text-gray-500">Startup X | 2023 - 2025</p>
                <p className="mt-2">
                  Training Models and EDA
                </p>
              </div>
            </div>
          </section>
          {/* Sección educación */}
          <section className="md-10">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">
              Education
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Data Science Professional Degree</strong> – IBM (2025)
              </li>
              <li>
                <strong>Frontend Developer</strong> – Oracle Next Education (2022)
              </li>
            </ul>
          </section>
          {/* Sección Proyectos */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">
              Projects
            </h2>
            <div className="space-y-6">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <h3 className="text-xl">SpaceY</h3>
                  <p className="text-gray-500">IBM Data Science | September 2025</p>
                  <p className="mt-2">
                    Desarrollo de aplicaciones web modernas con React, Next.js y APIs en Node.js.
                  </p>
                </li>
                <li>
                  <h3 className="text-xl">Laptop Prices</h3>
                  <p className="text-gray-500">IBM Data Science | 2025</p>
                  <p className="mt-2">
                    Implementación de interfaces responsivas con TailwindCSS y consumo de REST APIs.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          {/* End */}
        </div>
      </div>
    </main>
  );
}