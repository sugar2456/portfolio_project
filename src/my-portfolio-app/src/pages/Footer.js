import { FaGithub } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-8 text-sm text-slate-500 md:px-8">
      <p>© {currentYear} ogawa satoru</p>
      <a href="https://github.com/sugar2456" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-slate-700 transition hover:bg-slate-900 hover:text-white" aria-label="GitHub">
        <FaGithub size={24} />
      </a>
      </div>
    </footer>
  );
}

export default Footer;
