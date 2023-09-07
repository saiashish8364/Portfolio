import Intro from "./Intro/Intro";
import NavBarMenu from "./Navigation/Nav";
import classes from "./App.module.css";
import AboutMe from "./AboutMe/AboutMe";
import Sample from "./SampleProjects/Sample";
import Footer from "./Footer/Footer";
import { Suspense } from "react";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom";
import Projects from "./Projects/Projects";
import ContactMe from "./ContactMe/ContactMe";
import Skills from "./Skills/Skills";
import MobileNavMenu from "./MobileView/MobileNavigation/MobileNav";
import MobileIntro from "./MobileView/MobileIntro/MobileIntro";
import MobileAboutMe from "./MobileView/MobileAbout/MobileAbout";
import MobileSkills from "./MobileView/MobileSkills/MobileSkills";
import MobileSample from "./MobileView/MobileSampleProjects/MobileSampleProjects";
import MobileFooter from "./MobileView/MobileFooter/MobileFooter";
import MobileProjects from "./MobileView/MobileProjects/MobileProjects";
import MobileContactMe from "./MobileView/MobileContact/MobileContact";
import { useState, useEffect } from "react";
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isMobile = windowWidth <= 1080;
  return (
    <>
      {isMobile && (
        <>
          <MobileNavMenu />
          <main>
            <Suspense>
              <Switch>
                <Route path="/" exact>
                  <MobileIntro />
                  <MobileAboutMe />
                  <MobileSkills />
                  <MobileSample />
                  <footer>
                    <MobileFooter />
                  </footer>
                </Route>
                <Route path="/MobileProjects" exact>
                  <MobileProjects />
                  <footer>
                    <MobileFooter />
                  </footer>
                </Route>
                <Route path="/MobileContactMe" exact>
                  <MobileContactMe />
                </Route>
              </Switch>
            </Suspense>
          </main>
        </>
      )}
      {!isMobile && (
        <div className={classes.bcolor}>
          <div className={classes.navPosition}>
            <NavBarMenu />
          </div>

          <main>
            <Suspense>
              <Switch>
                <Route path="/" exact>
                  <div>
                    <Intro />
                    <AboutMe />
                    <Skills />
                    <Sample />
                    <footer>
                      <Footer />
                    </footer>
                  </div>
                </Route>
                <Route path="/Projects" exact>
                  <Projects />
                  <footer>
                    <Footer />
                  </footer>
                </Route>
                <Route path="/ContactMe" exact>
                  <ContactMe />
                </Route>
              </Switch>
            </Suspense>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
