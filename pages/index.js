import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import NavBar from "./components/NavBar";
import SectionHeader from "./components/sectionHeader";
import Services from "./components/services";
import Work from "./components/Work";

export default function Home() {
  return (
    <div>
      <main>
        <section
          className="relative flex min-h-screen h-auto flex-col"
          id="home"
        >
          <div
            className="absolute h-full w-full"
            style={{
              backgroundImage: "url('/assets/images/universe.jpg')",
              backgroundSize: "cover",
            }}
          ></div>
          <NavBar></NavBar>
          {/* <LanguageDropDown></LanguageDropDown> */}

          <SectionHeader></SectionHeader>
        </section>
        <section id="aboutme" className="bg-white mt-8 pt-20 pb-28 px-8">
          <AboutMe></AboutMe>
        </section>
        <section id="services" className="bg-gray-50 mt-8 pt-20 pb-28 px-8">
          <Services></Services>
        </section>
        <section id="work" className="bg-white mt-8 py-20 px-8">
          <Work></Work>
        </section>
        <section id="contact" className="h-screen pt-28 pb-36 px-8 bg-gray-50">
          <Contact></Contact>
        </section>
      </main>

      <footer className="space-x-6 inline-flex items-center justify-center w-full">
        <a href="#">
          <IoLogoLinkedin
            name="logo-linkedin"
            className="text-4xl hover:text-blue-700"
          ></IoLogoLinkedin>
        </a>
        <a href="#">
          <IoLogoGithub
            name="logo-github"
            className="text-4xl hover:text-blue-500"
          ></IoLogoGithub>
        </a>
      </footer>
    </div>
  );
}
