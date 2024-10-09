import AboutSite from "./sections/AboutSite";
import Banner from "./sections/Banner";
import Profile from "./sections/Profile";
import Skill from "./sections/Skill";
function Content() {
  return (
    <main>
      <Banner />
      <AboutSite />
      <Profile />
      <Skill />
    </main>
  );
}

export default Content;