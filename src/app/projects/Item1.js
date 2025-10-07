import Image from "next/image";

const ProjectImg1 = '/images/projects/brand.jpg'
export default function ProjectItem1() {
  return (
    <article className="bg-white flex flex-col max-w-lg mx-auto rounded-lg shadow-xl dark:bg-gray-700 mb-5 align-middle hover:scale-110 transition duration-300 ease-in-out ">
            <div className="w-full object-cover opacity-50 cursor-pointer filter grayscale hover:grayscale-0 hover:opacity-100 transition duration-300 ">
                <a href="/projects/item1">
                    <Image src={ProjectImg1} 
                    alt="Project-Image1"
                    width={150}
                    height={150}
                    className="w-full object-cover opacity-50 cursor-pointer filter grayscale hover:grayscale-0 hover:opacity-100 transition duration-300"
                    />
                </a>
            </div>

            <div className="bg-gray-900 opacity-60 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
                <h3 className="text-white text-lg font-semibold">Web App</h3>
            </div>

            <div className="px-6 py-4 flex flex-col gap-2">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white text-center">Mesa de Ayuda</h1>
                <p className="text-gray-500 dark:text-gray-300">Aplicacion que gestiona los servicios tecnicos solicitados por clientes a través de sus talleres independientes</p>

                <div className="py-1 justify-center flex items-center mt-4 text-gray-700 text-3xl dark:text-white">                        
                    {/* <FaHtml5 className='hover:text-orange-600 transition duration-200'/><div className='px-0.5'/> <FaCss3Alt className='hover:text-blue-400 transition duration-200'/><div className='px-0.5'/><FaJsSquare className='hover:text-yellow-500 transition duration-200'/> <div className='px-1'/> <FaPhp className='hover:text-purple-600 transition duration-200'/> <div className='px-1'/> <DiMysql className='hover:text-cyan-500 transition duration-200'/> */}
                </div>                                   

                <div className='text-center'>
                    <p className="uppercase text-gray-600 text-sm dark:text-gray-400">29 Ene 2023</p>
                </div>

            </div>

        </article>
  );
}