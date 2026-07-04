import { Link } from 'react-scroll';
function Header() {
  return (
    <header
      className="fixed left-0 top-0 z-50 w-full border-b border-white/60 bg-white/85 shadow-sm backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link to="top" smooth={true} duration={500} className="cursor-pointer text-sm font-black tracking-normal text-slate-950 md:text-base">
          OGAWA SATORU
        </Link>
        <ul className="flex gap-1 overflow-x-auto md:gap-2">
          <li className="nav-item">
            <Link to="about-site" smooth={true} duration={500} className="nav-item-text-class">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="profile" smooth={true} duration={500} className="nav-item-text-class">
              Career
            </Link>
          </li>
          <li className="nav-item">
            <Link to="skill" smooth={true} duration={500} className="nav-item-text-class">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="thinkingForJob" smooth={true} duration={500} className="nav-item-text-class">
              Values
            </Link>
          </li>
          <li className="nav-item">
            <Link to="portfolio" smooth={true} duration={500} className="nav-item-text-class">
              Works
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
