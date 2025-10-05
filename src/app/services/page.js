import Image from "next/image";

export const metadata = {
  title: "| Darwin Garcia| Services",
  description: "Data Scientist and Frontend Developer Portfolio.",
  keywords: 'Data Science, Portfolio, Photographer, PC Builder, YouTuber, Developer, Next.js, React, Tailwind CSS',
};

export default function Services() {
  return (
    <section className="flex flex-col items-center text-center py-16">
      <h2 className="text-3xl font-bold mt-4">Services</h2>
      <p className="mt-2 text-gray-600 max-w-xl">
        Services what i make our reality!
      </p>
    </section>
  );
}