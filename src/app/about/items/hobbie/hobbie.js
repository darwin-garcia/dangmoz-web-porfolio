import Image from 'next/image'
const HobbieImg1 = "/images/about/books.png"
const HobbieImg2 = "/images/about/music.png"
const HobbieImg3 = "/images/about/camping.png"
const HobbieImg4 = "/images/about/sony-camera.png"

export default function AboutHobbie() {
  return (
    <div>
        <h3 className='pt-2 pb-2 text-2xl text-black dark:text-white'> Hobbies</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-fit ">        
            <div className="flex flex-col max-w-lg mx-auto items-center justify-between px-4 py-4">                
                <div className='mx-auto w-40 h-40 relative md:h-32 md:w-32 '>
                    <Image src={HobbieImg1} 
                    layout='fill'
                    alt="Hobbie-Image-1" 
                    objectFit='contain'/>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Reading</h2>
                <p>I love to learn new things and read life stories that contain lessons and personal growth.</p>                
            </div>

            <div className="flex flex-col max-w-lg mx-auto items-center justify-between px-4 py-4">                
                <div className='mx-auto w-40 h-40 relative md:h-32 md:w-32 '>
                    <Image src={HobbieImg2} 
                    layout='fill' 
                    alt="Hobbie-Image-2"
                    objectFit='contain'/>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Music</h2>
                <p>I like to listen to any instrumental, symphonic or modern lo-fi genre for my daily work.</p>                
            </div>

            <div className="flex flex-col max-w-lg mx-auto items-center justify-between px-4 py-4">                
                <div className='mx-auto w-40 h-40 relative md:h-32 md:w-32 '>
                    <Image src={HobbieImg3} 
                    layout='fill' 
                    alt="Hobbie-Image-3"
                    objectFit='contain'/>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Travelling</h2>
                <p>Walking and being in contact with nature or another place is one of my favourite things to do.</p>                
            </div>

            <div className="flex flex-col max-w-lg mx-auto items-center justify-between px-4 py-4">                
                <div className='mx-auto w-40 h-40 relative md:h-32 md:w-32 '>
                    <Image src={HobbieImg4} 
                    layout='fill' 
                    alt="Hobbie-Image-4"
                    objectFit='contain'/>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Photography</h2>
                <p>On every trip I love to take pictures and share experiences with friends and people close to me.</p>                
            </div>
        </div>
    </div>
  );
}