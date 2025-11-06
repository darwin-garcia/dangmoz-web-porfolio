import Image from "next/image";

const Img1 = "/images/services/01.png"
const Img2 = "/images/services/2.png"
const Img3 = "/images/services/3.png"
const Img4 = "/images/services/4.png"
const Img5 = "/images/services/51.png"
const Img6 = "/images/services/6.png"

export const metadata = {
  title: "| Darwin Garcia| Services",
  description: "Data Scientist and Frontend Developer Portfolio.",
  keywords: 'Data Science, Portfolio, Photographer, PC Builder, YouTuber, Developer, Next.js, React, Tailwind CSS',
};

export default function Services() {
  return (
    <section className="px-8 py-20 max-w-5xl mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-7 p-7">
        
        {/* Card 1: Added h-full and fixed Image */}
        <div className="flex flex-col h-full bg-gray-100 dark:bg-blue-700/50 p-8 rounded-xl drop-shadow-xl text-center">
          <h3 className="text-xl font-semibold mb-3">Exploratory Analysis</h3>
          <div className="my-4"> {/* Wrapper for spacing */}
            <Image 
                src={Img1} 
                width={100}
                height={100}
                alt="Explore"
                className='mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300'/>
          </div>
          <p className="text-sm">Gain a clear understanding of your data, patterns, outliers, and key KPIs.</p>
        </div>
        
        {/* Card 2: Added h-full and fixed Image */}
        <div className="flex flex-col h-full bg-gray-100 dark:bg-blue-700/50 p-8 rounded-xl drop-shadow-xl text-center">
          <h3 className="text-xl font-semibold mb-3">Predictive Models</h3>
          <div className="my-4"> {/* Wrapper for spacing */}
            <Image 
                src={Img2} 
                width={100}
                height={100}
                alt="Model"
                className='mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300'/>
          </div>
          <p className="text-sm">Build machine learning models for prediction, segmentation, and optimization of your data.</p>
        </div>
        
        {/* Card 3: Added h-full and fixed Image */}
        <div className="flex flex-col h-full bg-gray-100 dark:bg-blue-700/50 p-8 rounded-xl drop-shadow-xl text-center">
          <h3 className="text-xl font-semibold mb-3">Dashboards and Data Visualization</h3>
          <div className="my-4"> {/* Wrapper for spacing */}
            <Image 
                src={Img3} 
                width={100}
                height={100}
                alt="Dashboard"
                className='mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300'/>
          </div>
          <p className="text-sm">Visualizations in Power BI, Plotly, Tableau, or custom web dashboards.</p>
        </div>
        
        {/* Card 4: Added h-full and ADDED Image */}
         <div className="flex flex-col h-full bg-gray-100 dark:bg-blue-700/50 p-8 rounded-xl drop-shadow-xl text-center">
          <h3 className="text-xl font-semibold mb-3">Data preparation</h3>
          <div className="my-4"> {/* Wrapper for spacing */}
            <Image 
                src={Img4} 
                width={100}
                height={100}
                alt="Data preparation"
                className='mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300'/>
          </div>
          <p className="text-sm">Collect, clean, transform, and format raw data to make it suitable for analysis.</p>
        </div>
        
        {/* Card 5: Added h-full and ADDED Image */}
         <div className="flex flex-col h-full bg-gray-100 dark:bg-blue-700/50 p-8 rounded-xl drop-shadow-xl text-center">
          <h3 className="text-xl font-semibold mb-3">Strategic consulting</h3>
          <div className="my-4"> {/* Wrapper for spacing */}
            <Image 
                src={Img5} 
                width={100}
                height={100}
                alt="Strategic consulting"
                className='mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300'/>
          </div>
          <p className="text-sm">I advise companies on how to use their data more efficiently and make more informed decisions.</p>
        </div>
        
        {/* Card 6: Added h-full and ADDED Image */}
         <div className="flex flex-col h-full bg-gray-100 dark:bg-blue-700/50 p-8 rounded-xl drop-shadow-xl text-center">
          <h3 className="text-xl font-semibold mb-3">Solution implementation</h3>
          <div className="my-4"> {/* Wrapper for spacing */}
            <Image 
                src={Img6} 
                width={100}
                height={100}
                alt="Solution implementation"
                className='mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300'/>
          </div>
          <p className="text-sm">I collaborate with other teams to integrate machine learning models into existing products or processes. </p>
        </div>
        
      </div>
    </section>
  );
}