import {
  IoPhonePortraitOutline,
  IoBulbOutline,
  IoRocketOutline,
  IoSpeedometerOutline,
} from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t, i18n } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">{t("services")}</h1>
        <p className="pt-2">{t("what_I_offer")}</p>
      </div>
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        <div className="relative h-full text-center justify-center items-center space-y-4 flex flex-col">
          <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 p-10 shadow-md rounded-full ">
            <IoBulbOutline
              name="phone-portrait-outline"
              className="text-5xl text-white"
            ></IoBulbOutline>
          </div>
          <h2 className="font-bold text-2xl">{t("intuitives")}</h2>
          <p>{t("intuitives_desc")}</p>
        </div>
        <div className="relative h-full text-center justify-center space-y-4 items-center flex flex-col">
          <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 p-10 shadow-md rounded-full ">
            <IoPhonePortraitOutline
              name="phone-portrait-outline"
              className="text-5xl text-white"
            ></IoPhonePortraitOutline>
          </div>
          <h2 className=" font-bold text-2xl">{t("responsive")}</h2>
          <p className="">{t("responsive_desc")}</p>
        </div>
        <div className="relative h-full rounded-md  text-center justify-center space-y-4 items-center flex flex-col">
          <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 p-10 shadow-md rounded-full ">
            <IoSpeedometerOutline
              name="layers-outline"
              className="text-5xl text-white"
            ></IoSpeedometerOutline>
          </div>
          <h2 className=" font-bold text-2xl">{t("fast")}</h2>
          <p className="">{t("fast_desc")}</p>
        </div>
        <div className="relative h-full text-center justify-center items-center w-full flex flex-col space-y-4">
          <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 p-10  shadow-md rounded-full ">
            <IoRocketOutline
              name="chatbubbles-outline"
              className="text-5xl text-white"
            ></IoRocketOutline>
          </div>
          <h2 className=" font-bold text-2xl">{t("dynamic")}</h2>
          <p className="">{t("dynamic_desc")} </p>
        </div>
      </div>
      <div className="mt-24">
        <div className="text-center">
          <p className="pt-2">{t("toolbox")}</p>
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
                    <p>{t("graph_desc")}</p>
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
                    <p>{t("laravel_desc")}</p>
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
                    <p>{t("express_desc")}</p>
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
                    <p>{t("db_desc")}</p>
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
                    <p>{t("fundamentals_desc")}</p>
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
                    <p>{t("tailwind_desc")}</p>
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
                    <p>{t("jsfw_desc")}</p>
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
                    <p>{t("mobile_desc")}</p>
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
