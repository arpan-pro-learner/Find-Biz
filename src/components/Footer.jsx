import { FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-2 flex flex-col items-center justify-center fixed bottom-0 w-full">
      <p className="text-lg font-bold mb-2">Project made by Arpan</p>
      <div className="flex items-center">
        <a href="https://www.instagram.com/theselftaught.dev/ "  target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl mr-4 hover:text-gray-500 transition-colors duration-200" />
        </a>
        <a href="https://www.linkedin.com/in/webdevarpan/"  target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-gray-500 transition-colors duration-200" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;