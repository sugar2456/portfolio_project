import { Link } from 'react-scroll';
function Header() {
  return (
    <header
      className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-auto bg-white shadow-md"
    >
      <nav>
        <ul className="flex md:space-x-8">
          <li className="nav-item">
            <Link to="about-site" smooth={true} duration={500} className="nav-item-text-class">
              このサイトについて
            </Link>
          </li>
          <li className="nav-item">
            <Link to="profile" smooth={true} duration={500} className="nav-item-text-class">
              私の経歴について
            </Link>
          </li>
          <li className="nav-item">
            <Link to="skill" smooth={true} duration={500} className="nav-item-text-class">
              経験スキルについて
            </Link>
          </li>
          <li className="nav-item">
            <Link to="thinkingForJob" smooth={true} duration={500} className="nav-item-text-class">
              仕事についての考え
            </Link>
          </li>
          <li className="nav-item">
            <Link to="portfolio" smooth={true} duration={500} className="nav-item-text-class">
              ポートフォリオの紹介
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;