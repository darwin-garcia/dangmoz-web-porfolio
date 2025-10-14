import ContactForm from "./form";
import SocialCard from "./social";
export const metadata = {
  title: "| Darwin Garcia| Contact Me and Social Links",
  description: "Interested in collaborating? Contact me through this form or my social media accounts.",
  keywords: 'Data Science, Portfolio, Photographer, PC Builder, YouTuber, Developer, Next.js, React, Tailwind CSS',
};

export default function Contact() {
  return (
    <div className="container mx-auto p-8 flex flex-col items-center">
      <ContactForm />
      <SocialCard/>
    </div>
  );
}