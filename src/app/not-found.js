import Link from 'next/link';
import ParticleCanvas from '@/components/ParticleCanvas';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faHouse, faWrench} from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: "| Darwin Garcia | 404 Error"
};

export default function NotFound() {
  return (
    <main className="h-screen bg-cover bg-center bg-fixed grid justify-items-center items-center text-center relative">
        <ParticleCanvas/>
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-800 dark:text-gray-200">
          <FontAwesomeIcon icon={faTriangleExclamation} className="h-6 w-6" />404
        </h1>
        <p className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          ¡Houston! We have a problem. This website has been hijacked. DEFCON-3.
        </p>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
          We apologize, we were unable to find the page you are looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <FontAwesomeIcon icon={faHouse} className="h-6 w-6" /> Return to Home
          </Link>
          <a href="#" className="text-sm font-semibold text-gray-900 dark:text-white">
            <FontAwesomeIcon icon={faWrench} className="h-6 w-6" /> Request support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}