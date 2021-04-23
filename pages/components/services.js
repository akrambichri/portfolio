import {
  IoPhonePortraitOutline,
  IoBulbOutline,
  IoRocketOutline,
  IoSpeedometerOutline,
} from "react-icons/io5";
export default function Services() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">Services</h1>
        <p className="pt-2">Here's what I offer</p>
      </div>
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        <div className="relative h-full text-center justify-center items-center space-y-4 flex flex-col">
          <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 p-10 shadow-md rounded-full ">
            <IoBulbOutline
              name="phone-portrait-outline"
              className="text-5xl text-white"
            ></IoBulbOutline>
          </div>
          <h2 className="font-bold text-2xl">Intuitives</h2>
          <p>Strong preference for easy to use, intuitive UX/UI.</p>
        </div>
        <div className="relative h-full text-center justify-center space-y-4 items-center flex flex-col">
          <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 p-10 shadow-md rounded-full ">
            <IoPhonePortraitOutline
              name="phone-portrait-outline"
              className="text-5xl text-white"
            ></IoPhonePortraitOutline>
          </div>
          <h2 className=" font-bold text-2xl">Responsive</h2>
          <p className="">My layouts will work on any device, big or small.</p>
        </div>
        <div className="relative h-full rounded-md  text-center justify-center space-y-4 items-center flex flex-col">
          <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 p-10 shadow-md rounded-full ">
            <IoSpeedometerOutline
              name="layers-outline"
              className="text-5xl text-white"
            ></IoSpeedometerOutline>
          </div>
          <h2 className=" font-bold text-2xl">Fast</h2>
          <p className="">
            Fast load times and lag free interaction, my highest priority.
          </p>
        </div>
        <div className="relative h-full text-center justify-center items-center w-full flex flex-col space-y-4">
          <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 p-10  shadow-md rounded-full ">
            <IoRocketOutline
              name="chatbubbles-outline"
              className="text-5xl text-white"
            ></IoRocketOutline>
          </div>
          <h2 className=" font-bold text-2xl">Dynamic</h2>
          <p className="">Websites don't have to be static, give them life.</p>
        </div>
      </div>
      <div className="mt-24">
        <div className="text-center">
          <p className="pt-2">Ma boite à outils</p>
        </div>
        <div className="relative lg:pt-0 lg:flex lg:text-left one-4-col mb-12">
          <div className="blocks  lg:w-1/2">
            <div className="lg:mr-8" id="f03d6d08-9a4a-4532-a3fc-43a2a1ccf505">
              <div className="font-bold text-xl my-6 w-full text-center">
                BACK
              </div>

              <ul>
                <li className="rounded bg-white pt-4 px-4 pb-1 mb-4">
                  <div className="flex items-center mb-3">
                    <a target="_blank" href="https://getkirby.com">
                      <img
                        className="mr-3"
                        src="assets/images/graphql.png"
                        alt="logo"
                        width="30px"
                      />
                    </a>

                    <div className="font-bold text-xl">
                      <a
                        target="_blank"
                        className="hover:text-blue-600"
                        href="https://getkirby.com"
                      >
                        GraphQL
                      </a>
                    </div>
                  </div>
                  <span className="text-gray-700">
                    <p>
                      GraphQL est un langage de requête pour Optimiser les
                      traitements et Maximisation de l'expérience utilisateur.
                    </p>
                  </span>
                </li>

                <li className="rounded bg-white  pt-4 px-4 pb-1 mb-4">
                  <div className="flex items-center mb-3">
                    <a target="_blank" href="https://11ty.dev">
                      <img
                        className="mr-3"
                        src="assets/images/laravel.png"
                        alt="logo"
                        width="30px"
                      />
                    </a>

                    <div className="font-bold text-xl">
                      <a
                        target="_blank"
                        className="hover:text-blue-600"
                        href="https://11ty.dev"
                      >
                        Laravel
                      </a>
                    </div>
                  </div>
                  <span className="text-gray-700">
                    <p>
                      Laravel est un framework novateur, complet, qui utilise
                      les possibilités les plus récentes.
                    </p>
                  </span>
                </li>

                <li className="rounded bg-white  pt-4 px-4 pb-1 mb-4">
                  <div className="flex items-center mb-3">
                    <a target="_blank" href="https://preview.adonisjs.com">
                      <img
                        className="mr-2"
                        src="assets/images/express.png"
                        alt="logo"
                        width="40px"
                      />
                    </a>

                    <div className="font-bold text-xl">
                      <a
                        target="_blank"
                        className="hover:text-blue-600"
                        href="https://preview.adonisjs.com"
                      >
                        Express JS
                      </a>
                    </div>
                  </div>
                  <span className="text-gray-700">
                    <p>
                      ExpressJS est un framework qui se veut minimaliste. Très
                      léger, Il priorise les performances optimales et
                      l'exécution rapide.
                    </p>
                  </span>
                </li>

                <li className="rounded bg-white  pt-4 px-4 pb-1 mb-4">
                  <div className="flex items-center mb-3">
                    <a target="_blank" href="https://www.postgresql.org/">
                      <img
                        className="mr-3"
                        src="assets/images/mysql.png"
                        alt="logo"
                        width="40px"
                      />
                    </a>

                    <a target="_blank" href="https://www.postgresql.org/">
                      <img
                        className="mr-3"
                        src="assets/images/postgres.png"
                        alt="logo"
                        width="30px"
                      />
                    </a>

                    <a target="_blank" href="https://www.postgresql.org/">
                      <img
                        className="mr-3"
                        src="assets/images/mongodb.png"
                        alt="logo"
                        width="30px"
                      />
                    </a>

                    <div className="font-bold text-xl">
                      <a
                        target="_blank"
                        className="hover:text-blue-600"
                        href="https://www.postgresql.org/"
                      >
                        MySQL, Postgres, MongoDB
                      </a>
                    </div>
                  </div>
                  <span className="text-gray-700">
                    <p>
                      Les bases de données relationelles et non relationelles.
                    </p>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="blocks  lg:w-1/2">
            <div className="lg:mr-8" id="fff354c3-dd18-482d-88d0-38dfea4b05ec">
              <div className="font-bold text-xl my-6 w-full text-center">
                FRONT
              </div>

              <ul>
                <li className="rounded bg-white  pt-4 px-4 pb-1 mb-4">
                  <div className="flex items-center mb-3">
                    <a target="_blank" href="https://developer.mozilla.org">
                      <img
                        className="mr-3"
                        src="assets/images/html.jpg"
                        alt="logo"
                        width="30px"
                      />
                    </a>

                    <a target="_blank" href="https://developer.mozilla.org">
                      <img
                        className="mr-3"
                        src="assets/images/css.png"
                        alt="logo"
                        width="30px"
                      />
                    </a>

                    <a target="_blank" href="https://developer.mozilla.org">
                      <img
                        className="mr-3"
                        src="assets/images/js.png"
                        alt="logo"
                        width="30px"
                      />
                    </a>

                    <a target="_blank" href="https://developer.mozilla.org">
                      <img
                        className="mr-3"
                        src="assets/images/git.png"
                        alt="logo"
                        width="30px"
                      />
                    </a>

                    <div className="font-bold text-xl">
                      <a
                        target="_blank"
                        className="hover:text-blue-600"
                        href="https://developer.mozilla.org"
                      >
                        HTML, CSS, JavaScript, Git
                      </a>
                    </div>
                  </div>
                  <span className="text-gray-700">
                    <p>Les incontournables du développement web.</p>
                  </span>
                </li>

                <li className="rounded bg-white  pt-4 px-4 pb-1 mb-4">
                  <div className="flex items-center mb-3">
                    <a target="_blank" href="https://tailwindcss.com">
                      <img
                        className="mr-3"
                        src="assets/images/tailwind.png"
                        alt="logo"
                        width="30px"
                      />
                    </a>

                    <div className="font-bold text-xl">
                      <a
                        target="_blank"
                        className="hover:text-blue-600"
                        href="https://tailwindcss.com"
                      >
                        Tailwind CSS
                      </a>
                    </div>
                  </div>
                  <span className="text-gray-700">
                    <p>
                      Un framework CSS modulable et basé sur l'utilisation de
                      classes utilitaires.
                    </p>
                  </span>
                </li>

                <li className="rounded bg-white  pt-4 px-4 pb-1 mb-4">
                  <div className="flex items-center mb-3">
                    <a
                      target="_blank"
                      href="https://github.com/alpinejs/alpine"
                    >
                      <img
                        className="mr-3"
                        src="assets/images/react.png"
                        alt="logo"
                        width="30px"
                      />
                    </a>

                    <a target="_blank" href="https://developer.mozilla.org">
                      <img
                        className="mr-3"
                        src="assets/images/angular.png"
                        alt="logo"
                        width="30px"
                      />
                    </a>

                    <a target="_blank" href="https://developer.mozilla.org">
                      <img
                        className="mr-3"
                        src="assets/images/nuxt.png"
                        alt="logo"
                        width="30px"
                      />
                    </a>

                    <div className="font-bold text-xl">
                      <a
                        target="_blank"
                        className="hover:text-blue-600"
                        href="https://github.com/alpinejs/alpine"
                      >
                        React JS, Angular, Nuxt JS
                      </a>
                    </div>
                  </div>
                  <span className="text-gray-700">
                    <p>
                      Un framework JavaScript léger et minimaliste pour mettre
                      en place les interactions simples.
                    </p>
                  </span>
                </li>

                <li className="rounded bg-white  pt-4 px-4 pb-1 mb-4">
                  <div className="flex items-center mb-3">
                    <a target="_blank" href="https://svelte.dev/">
                      <img
                        className="mr-3"
                        src="assets/images/flutter.svg"
                        alt="logo"
                        width="20px"
                      />
                    </a>

                    <a target="_blank" href="https://svelte.dev/">
                      <img
                        className="mr-3"
                        src="assets/images/react.png"
                        alt="logo"
                        width="30px"
                      />
                    </a>

                    <div className="font-bold text-xl">
                      <a
                        target="_blank"
                        className="hover:text-blue-600"
                        href="https://svelte.dev/"
                      >
                        Flutter, React Native
                      </a>
                    </div>
                  </div>
                  <span className="text-gray-700">
                    <p>
                      Un compilateur JavaScript pour construire des intéractions
                      et des applications plus élaborées.
                    </p>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
