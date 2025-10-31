import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faMapPin, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const ImgUser = '/images/profile/1755223532651.jpg'
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
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-red-700 transition-colors"
            >
              <FontAwesomeIcon icon = {faDownload} className="text-xl" /> Download PDF
            </Link>
          </section>
          {/* Sección habilidades en la columna izquierda */}
          <section className="mt-10">
            <ul>
              <li><FontAwesomeIcon icon = {faWhatsapp} className="text-md" /> 3104600220</li>
              <li><FontAwesomeIcon icon = {faEnvelope} className="text-md" /> darwin_garcia@me.com</li>
              <li><FontAwesomeIcon icon = {faMapPin} className="text-md" /> Bogota (Colombia)</li>
              <li>
                <a href="https://www.linkedin.com/in/darwingarc%C3%ADa/" className="hover:text-blue-500 transition-colors mr-2"><FontAwesomeIcon icon = {faLinkedin} className="text-lg" /></a> 
                <a href="https://github.com/darwin-garcia" className="hover:text-gray-500 transition-colors mr-2"><FontAwesomeIcon icon = {faGithub} className="text-lg"/></a></li>
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
                Passionate about storytelling and create new data solutions that generate tangile impact and value. Excellent command of tools such as Python and SQL, with a clear goal of developing advances Machine Learning models that impove decision-making.
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
                  Data Professional CEO and Consultant Leader.
                </p>
              </div>              
            </div>
          </section>

          {/* Sección educación */}
          {/*
            CORRECCIÓN: Aquí cambiamos "md-10" por "mb-10".
            "mb-10" es una clase de Tailwind CSS que aplica un margen en la parte inferior (margin-bottom).
            Esto asegura que haya un espacio consistente después de esta sección.
          */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">
              Education
            </h2>
            <div className="space-y-6">
              <ul className="list-none list-inside space-y-2">
                <li>
                  <strong>Data Science Professional Degree</strong> – IBM (2025)
                </li>
                <li>
                  <strong>Frontend Developer</strong> – Oracle Next Education (2022)
                </li>
              </ul>
            </div>            
          </section>

          {/* Sección Proyectos */}
          {/*
            DOCUMENTACIÓN: La clase "mb-10" también se usa aquí para mantener
            la consistencia en el espaciado vertical entre todas las secciones.
          */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">
              Projects
            </h2>
            <div className="space-y-6">
              <ul className="list-none list-inside space-y-4">
                <li>
                  <h3 className="text-xl">SpaceY Starship</h3>
                  <p className="text-gray-500">IBM Data Science | September 2025</p>
                  <p className="mt-2">
                    Aerospatial agence. Predict landing outcomes and its possible coordinates. Machine Learning techniques implementation to achieve succesful results with accuracy ratio score.
                  </p>
                </li>
                <li>
                  <h3 className="text-xl">Laptop Sales</h3>
                  <p className="text-gray-500">Independent | 2025</p>
                  <p className="mt-2">
                    Laptop sales prediction based on relevant features and cost/benefit ratio for end-user. Machine Learning implementation to determine the fall in sales.
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
