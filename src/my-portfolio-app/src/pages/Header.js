function Header() {
  return (
    <header
      className="flex items-center justify-center h-16"
    >
      <nav>
        <ul className="flex space-x-8">
          <li>
            <a href="/about_site" className="font-bold">このサイトについて</a>
          </li>
          <li>
            <a href="/about_my_career" className="font-bold">私の経歴について</a>
          </li>
          <li>
            <a href="/about_my_skills" className="font-bold">スキルについて</a>
          </li>
          <li>
            <a href="/abount_thinking_for_job" className="font-bold">仕事についての考え</a>
          </li>
          <li>
            <a href="/portfolio" className="font-bold">ポートフォリオの紹介</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;