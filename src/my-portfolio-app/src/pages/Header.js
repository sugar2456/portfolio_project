import { Link } from 'react-scroll';
function Header() {
  return (
    <header
      className="flex items-center justify-center h-16"
    >
      <nav>
        <ul className="flex space-x-8">
          <li className="nav-item">
            <Link to="about-site" smooth={true} duration={500} className="cursor-pointer">
              このサイトについて
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about-site" smooth={true} duration={500} className="cursor-pointer">
              私の経歴について
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about-site" smooth={true} duration={500} className="cursor-pointer">
              スキルについて
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about-site" smooth={true} duration={500} className="cursor-pointer">
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