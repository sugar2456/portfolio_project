import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-16 bg-white">
      <p className="mr-4">© 2024 ogawa satoru</p>
      <a href="https://github.com/sugar2456" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
        <FaGithub size={24} />
      </a>
    </footer>
  );
}

export default Footer;