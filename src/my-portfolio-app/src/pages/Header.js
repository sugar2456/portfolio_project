import { Link } from 'react-scroll';
function Header() {
  return (
    <header
      className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-16 bg-white shadow-md"
    >
      <nav>
        <ul className="flex space-x-8">
          <li className="nav-item">
            <Link to="about-site" smooth={true} duration={500} className="cursor-pointer">
              このサイトについて
            </Link>
          </li>
          <li className="nav-item">
            <Link to="profile" smooth={true} duration={500} className="cursor-pointer">
              私の経歴について
            </Link>
          </li>
          <li className="nav-item">
            <Link to="skill" smooth={true} duration={500} className="cursor-pointer">
              スキルについて
            </Link>
          </li>
          <li className="nav-item">
            <Link to="thinkingForJob" smooth={true} duration={500} className="cursor-pointer">
              仕事についての考え
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about-site" smooth={true} duration={500} className="cursor-pointer">
              ポートフォリオの紹介
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;