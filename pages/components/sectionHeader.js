import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
export default function SectionHeader() {
  return (
    <div className="z-20 max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-gray-900 bg-opacity-70 mx-6 lg:mx-0 ">
        <div className="p-4 md:p-10 md:pt-8 md:pb-8 text-center lg:text-left">
          <div
            className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/images/akram-bichri-profile.jpg')",
            }}
          ></div>

          <h1 className="text-3xl font-bold text-gray-100 pt-8 lg:pt-0">
            BICHRI AKRAM
          </h1>
          <p className="text-gray-100 pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
            <svg
              className="h-4 fill-current text-purple-400 pr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
            </svg>
            FULL-STACK WEB/MOBILE DEVELOPER
          </p>
          <p className="pt-2 text-gray-100 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
            <svg
              className="h-4 fill-current text-purple-400 pr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
            </svg>{" "}
            France, Paris
          </p>
          <p className="pt-8 text-base text-gray-100 font-semibold">
            I love taking complex ideas or problems and turn them into simple
            and beautiful apps, I also love the logic and structure of coding
            and always strive to write elegant and efficient code.
          </p>

          <div className=" py-6 pt-8 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-center  lg:justify-start space-x-2">
            <a
              className="link"
              href="https://www.linkedin.com/in/akram-bichri/"
            >
              <IoLogoLinkedin
                name="logo-linkedin"
                className="text-3xl text-gray-300  hover:text-blue-700"
              ></IoLogoLinkedin>
            </a>
            <a className="link" href="https://github.com/akrambichri/">
              <IoLogoGithub
                name="logo-github"
                className="text-3xl text-gray-300  hover:text-blue-500"
              ></IoLogoGithub>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/5">
        <img
          src="assets/images/akram-bichri-profile.jpg"
          className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
        />
      </div>
    </div>
  );
}
