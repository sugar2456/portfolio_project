import AboutSite from "./sections/AboutSite";
import Banner from "./sections/Banner";
import Profile from "./sections/Profile";
import Skill from "./sections/Skill";
import ThinkingForJob from "./sections/ThinkingForJob";
import Portfolio from "./sections/Portfolio";
function Content() {
  return (
    <main>
      <Banner />
      <AboutSite />
      <Profile />
      <Skill />
      <ThinkingForJob />
      <Portfolio />
    </main>
  );
}

export default Content;