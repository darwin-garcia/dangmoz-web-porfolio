import Image from "next/image";
import ContactForm from "./form";
// 1. Importa el componente principal
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 2. Importa los íconos que necesitas
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Ícono de sobre
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Íconos de marcas

export const metadata = {
  title: "| Darwin Garcia| Contact Me and Social Links",
  description: "Interested in collaborating? Contact me through this form or my social media accounts.",
  keywords: 'Data Science, Portfolio, Photographer, PC Builder, YouTuber, Developer, Next.js, React, Tailwind CSS',
};

export default function Contact() {
  return (
    <div className="container mx-auto p-8 flex flex-col items-center">
      <ContactForm />
    </div>
  );
}