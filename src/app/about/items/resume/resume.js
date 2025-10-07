import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload} from '@fortawesome/free-solid-svg-icons';
import Carousel from '@/components/Carousel';

const ExpImg = "/images/about/trofeo.png"
const ClientImg = "/images/about/cara-feliz.png"
const ProjectImg = "/images/about/proyecto.png"

export default function AboutResume() {
  return (
    <div>
        <Carousel/>
        <h3 className='pt-2 pb-2 text-2xl text-black dark:text-white'> Hello! I'm Darwin Garcia</h3>
        <p>Welcome to my site!. </p>
        <p>👷‍♂️ I am a creative, organised and self-taught person, I usually research topics of interest, study them and put them into practice. I like to solve problems through data, using tools to obtain information with a focus on results. 
        I seek to make an impact with resolution, I have interpersonal skills with clients and teams as the main skill that makes the difference for a good working relationship and understanding the business.</p>
        <p>I am looking for opportunities to be part of an IT team in a company where I can grow professionally and contribute with my acquired skills.</p>
        <p>🙌 Thank you for visiting my profile!</p>        
        <div className='grid justify-center pt-3 pb-3'>
            <a href="https://drive.google.com/file/d/1pDgw9jBR-dFZXHsJk-RF3UzBHQ7t_UNc/view?usp=sharing" className="bg-blue-500 text-gray-800 dark:text-white font-bold py-2 px-4 rounded inline-flex items-center border border-blue-300 no-underline hover:bg-red-600 transition duration-200 hover:underline">
              <FontAwesomeIcon icon={faDownload} className="h-6 w-6" />
              <span>Download Resume</span>
            </a>
        </div>        

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-7 p-7">
          <div className="flex flex-col  bg-gray-100 dark:bg-blue-700/50 p-8 rounded-xl drop-shadow-xl text-center">
              <div className="items-center gap-4 ">
                <div className='mx-auto w-24 h-24 relative md:h-16 md:w-16 '>
                      <Image 
                      src={ExpImg} 
                      layout='fill' 
                      alt="Trophy"
                      objectFit='contain' 
                      className='transition ease-in-out delay-150 hover:-translate-y-1 -inset-1 hover:scale-125 duration-300'/>
                </div>
              <div className='mt-1'>
                <h3 className="text-blue-800 dark:text-blue-100 font-bold hover:text-cyan-600 duration-300">Experience</h3>
              </div>
            </div>  
            <div className='border-t-2'/>
            <p className="text-gray-500 dark:text-gray-300">1 Year as Junior Data Scientist</p>
          </div>

          <div className="flex flex-col  bg-gray-100 dark:bg-blue-700/50 p-8 rounded-xl drop-shadow-xl text-center ">
              <div className="items-center gap-4">
                <div className='mx-auto w-24 h-24 relative md:h-16 md:w-16 '>
                    <Image src={ClientImg} 
                    layout='fill'
                    alt="Happy-Face" 
                    objectFit='contain' 
                    className='transition ease-in-out delay-150 hover:-translate-y-1 -inset-1 hover:scale-125 duration-300'/>
                </div>
              <div className='mt-1'>
                <h3 className="text-blue-800 dark:text-blue-100 font-bold hover:text-cyan-600 duration-300">Clients</h3>
              </div>
            </div>  
            <div className='border-t-2'/>
            <ul className="justify-center max-w-md px-0 mx-0 list-none text-gray-500 dark:text-gray-300 min-w-full">
                <li>2  Colombia </li>
                <li>1  USA</li>
            </ul>            
          </div>

          <div className="flex flex-col  bg-gray-100 dark:bg-blue-700/50 p-8 rounded-xl drop-shadow-xl text-center">
            <div className="items-center gap-4">
                <div className='mx-auto w-24 h-24 relative md:h-16 md:w-16 '>
                  <Image src={ProjectImg} 
                  layout='fill'
                  alt="Projects" 
                  objectFit='contain' 
                  className='transition ease-in-out delay-150 hover:-translate-y-1 -inset-1 hover:scale-125 duration-300'/>
              </div>
              <div className='mt-1'>
                <h3 className="text-blue-800 dark:text-blue-100 font-bold hover:text-cyan-600 duration-300">Projects</h3>
              </div>
            </div>  
            <div className='border-t-2'/>
            <ul className="justify-center max-w-md px-0 mx-0 list-none text-gray-500 dark:text-gray-300 min-w-full">
                <li>🏁 1  Finished </li>
                <li><a className='text-blue-800 dark:text-blue-100 no-underline'>See Testimonials</a></li>
            </ul>            
          </div>
      </div>      
    </div>
  );
}