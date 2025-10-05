'use client'; // Directiva necesaria para usar hooks de React como useState
import Link from 'next/link';
// 1. Importa el componente y los íconos de Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';


export default function ExperienceItem() {
    return (
    <article className=''>
        <ul>
            <li className='py-4'>
                <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:gap-x-8 xl:space-y-0' >
                    <div className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                       <p><FontAwesomeIcon icon={faCalendarAlt} className="h-6 w-6" /> 1 Mayo 2021 - Actual</p>
                    </div>
                    
                    <div className='space-y-3 xl:col-span-3'>
                        <div>                            
                            <h3 className='text-2xl font-bold leading-8 tracking-tight dark:text-white'>
                               <p className='text-gray-900 dark:text-gray-100 hover:text-cyan-500 duration-300' href='/'>Freelance</p>
                            </h3>
                            <h4 className='text-md font-semibold leading-7 tracking-tight text-gray-700 dark:text-gray-300'>Data Scientist</h4>
                            <div className='flex flex-wrap'>
                               <p className='mr-3 text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-gray-600 dark:text-gray-400'><FontAwesomeIcon icon={faMapMarkerAlt} className="h-6 w-6" />Bogota</p> 
                            </div>
                        </div>

                        <div className='prose max-w-none text-gray-500 dark:text-gray-300'>
                            <ul>
                                <li>Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern.</li>
                                <li>Helped solidify a brand direction for blistabloc that spans both packaging and web</li>
                                <li>Interfaced with clients on a weekly basis, providing technological expertise</li>
                            </ul>
                        </div>

                        <div className='prose max-w-none text-gray-500 dark:text-gray-300'>
                            <a href="https://www.google.com.co"><FontAwesomeIcon icon={faGlobe} className='h-6 w-6'/> Website </a>
                        </div>
                    </div>                  
                </div>
                
            </li>
            <div className='bg-[#ffffff80] h-[0.5px] w-[auto]  shadow-black'></div>
            <li className='py-4'>
                <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:gap-x-8 xl:space-y-0'>
                    <div className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                         <p><FontAwesomeIcon icon={faCalendarAlt} className="h-6 w-6" /> 1 Mayo 2021 - Actual</p>
                    </div>  

                    <div className='space-y-3 xl:col-span-3'>
                        <div>
                            <h3 className='text-2xl font-bold leading-8 tracking-tight'>
                                <p className='text-gray-900 dark:text-gray-100 hover:text-cyan-500 duration-300' href='/'>Freelance</p>
                            </h3>
                            <h4 className='text-md font-semibold leading-7 tracking-tight text-gray-700 dark:text-gray-300'>Data Analyst</h4>
                            <div className='flex flex-wrap'>
                                <p className='mr-3 text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-gray-600 dark:text-gray-400'><FontAwesomeIcon icon={faMapMarkerAlt} className="h-6 w-6" />Bogota</p> 
                            
                            </div>
                        </div>

                        <div className='prose max-w-none text-gray-500 dark:text-gray-300'>
                            <p>The blog template supports posts in nested sub-folders. This can be used to group posts of similar content e.g. a multi-part course. This post is itself an example of a nested route!</p>
                        </div>
                    </div>                  
                </div>
            </li>
            <div className='bg-[#ffffff80] h-[0.5px] w-[auto]  shadow-black'></div>
            <li className='py-4'>
                <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:gap-x-8 xl:space-y-0'>
                    <div className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                        <p><FontAwesomeIcon icon={faCalendarAlt} className="h-6 w-6" /> 1 Mayo 2021 - Actual</p>
                    </div>
                    
                    <div className='space-y-3 xl:col-span-3'>
                        <div>
                            <h3 className='text-2xl font-bold leading-8 tracking-tight'>
                               <p className='text-gray-900 dark:text-gray-100 hover:text-cyan-500 duration-300' href='/'>Freelance</p>
                            </h3>
                            <h4 className='text-md font-semibold leading-7 tracking-tight text-gray-700 dark:text-gray-300'>Data Analyst</h4>
                            <div className='flex flex-wrap'>
                               <p className='mr-3 text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-gray-600 dark:text-gray-400'><FontAwesomeIcon icon={faMapMarkerAlt} className="h-6 w-6" />Bogota</p> 
                            
                            </div>
                        </div>

                        <div className='prose max-w-none text-gray-500 dark:text-gray-300'>
                            <p>The blog template supports posts in nested sub-folders. This can be used to group posts of similar content e.g. a multi-part course. This post is itself an example of a nested route!</p>
                        </div>
                    </div>                  
                </div>
            </li>
            <div className='bg-[#ffffff80] h-[0.5px] w-[auto]  shadow-black'></div>
            <li className='py-4'>
                <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:gap-x-8 xl:space-y-0'>
                    <div className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                        <p><FontAwesomeIcon icon={faCalendarAlt} className="h-6 w-6" /> 1 Mayo 2021 - Actual</p>
                    </div>
                    
                    <div className='space-y-3 xl:col-span-3'>
                        <div>
                            <h3 className='text-2xl font-bold leading-8 tracking-tight'>
                                <p className='text-gray-900 dark:text-gray-100 hover:text-cyan-500 duration-300' href='/'>Freelance</p>
                            </h3>
                            <h4 className='text-md font-semibold leading-7 tracking-tight text-gray-700 dark:text-gray-300'>Data Analyst</h4>
                            <div className='flex flex-wrap'>
                                <p className='mr-3 text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-gray-600 dark:text-gray-400'><FontAwesomeIcon icon={faMapMarkerAlt} className="h-6 w-6" />Bogota</p> 
                            
                            </div>
                        </div>

                        <div className='prose max-w-none text-gray-500 dark:text-gray-300'>
                            <p>The blog template supports posts in nested sub-folders. This can be used to group posts of similar content e.g. a multi-part course. This post is itself an example of a nested route!</p>
                        </div>
                    </div>                  
                </div>
            </li>
        </ul>
    </article>
  )
}