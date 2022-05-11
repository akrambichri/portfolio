import { IoSchoolOutline, IoBriefcaseOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t, i18n } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">{t("about")}</h1>
        <p className="pt-2">{t("professional_career")}</p>
      </div>
      <div className="mt-24 font-bold">
        <div className="container">
          <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
            <div className="flex flex-row-reverse md:contents">
              <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <div className="space-x-4 inline-flex font-semibold text-lg mb-1">
                  <IoBriefcaseOutline
                    name="logo-linkedin"
                    className="text-2xl mt-1 hover:text-blue-700"
                  ></IoBriefcaseOutline>
                  <h3>
                    SamaPass{" "}
                    <smal className="text-gray-300 text-sm">
                      - 18 {t("months")}
                    </smal>
                  </h3>
                </div>

                <h4 className="leading-tight text-justify ">
                  Mission :{" "}
                  <small className="text-gray-300">
                    {t("samapass_mission")}
                  </small>
                </h4>
                <h4 className="leading-tight text-justify">
                  Technologies :{" "}
                  <small className="text-gray-300">
                    Laravel, Mysql, Flutter, Nuxt JS, Tailwind CSS.
                  </small>
                </h4>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-brand pointer-events-none"></div>
                </div>
                <div className="w-auto h-auto p-2 absolute top-1/2 -mt-3 -ml-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 shadow">
                  2021
                </div>
              </div>
            </div>
            <div className="flex md:contents font-bold">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-brand pointer-events-none"></div>
                </div>
                <div className="w-auto h-auto p-2 absolute top-1/2 -mt-3 -ml-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 shadow">
                  2020
                </div>
              </div>
              <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                <div className="space-x-4 inline-flex font-semibold text-lg mb-1">
                  <IoBriefcaseOutline
                    name="logo-linkedin"
                    className="text-2xl mt-1 hover:text-blue-700"
                  ></IoBriefcaseOutline>
                  <h3>
                    Vision Business Consulting{" "}
                    <smal className="text-gray-300 text-sm">
                      - 6 {t("months")}
                    </smal>
                  </h3>
                </div>
                <h4 className="leading-tight text-justify ">
                  Mission :{" "}
                  <small className="text-gray-300">{t("vbc_mission")}</small>
                </h4>
                <h4 className="leading-tight text-justify">
                  Technologies :{" "}
                  <small className="text-gray-300">
                    React-native, .NET Core, React Js, SQLite, Postgres,
                    Swagger, Ocelot.
                  </small>
                </h4>
              </div>
            </div>
            <div className="flex flex-row-reverse md:contents font-bold">
              <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <div className="space-x-4 inline-flex font-semibold text-lg mb-1">
                  <IoBriefcaseOutline
                    name="logo-linkedin"
                    className="text-2xl mt-1 hover:text-blue-700"
                  ></IoBriefcaseOutline>{" "}
                  <h3>
                    Zen Capital
                    <smal className="text-gray-300 text-sm">
                      - 6 {t("months")}
                    </smal>
                  </h3>
                </div>
                <h4 className="leading-tight text-justify ">
                  Mission :{" "}
                  <small className="text-gray-300">{t("zen_mission")}</small>
                </h4>
                <h4 className="leading-tight text-justify">
                  Technologies :{" "}
                  <small className="text-gray-300">
                    R, Python, Tableau. Electron JS, Arduino.
                  </small>
                </h4>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div className="w-auto h-auto p-2 absolute top-1/2 -mt-3 -ml-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 shadow">
                  2018
                </div>
              </div>
            </div>

            <div className="flex md:contents font-bold">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div className="w-auto h-auto p-2 absolute top-1/2 -mt-3 -ml-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 shadow">
                  2017
                </div>
              </div>
              <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                <div className="space-x-4 inline-flex font-semibold text-lg mb-1">
                  <IoBriefcaseOutline
                    name="logo-linkedin"
                    className="text-2xl mt-1 hover:text-blue-700"
                  ></IoBriefcaseOutline>{" "}
                  <h3>
                    SUEZ{" "}
                    <smal className="text-gray-300 text-sm">
                      - 12 {t("months")}
                    </smal>
                  </h3>
                </div>
                <h4 className="leading-tight text-justify ">
                  Mission :{" "}
                  <small className="text-gray-300">{t("suez_mission")}</small>
                </h4>
                <h4 className="leading-tight text-justify">
                  Technologies :{" "}
                  <small className="text-gray-300">
                    React-native, Laravel, React Js, Mysql, Swagger, Chart JS.
                  </small>
                </h4>
              </div>
            </div>

            <div className="flex flex-row-reverse md:contents font-bold">
              <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <div className="space-x-4 inline-flex font-semibold text-lg mb-1">
                  <IoBriefcaseOutline
                    name="logo-linkedin"
                    className="text-2xl mt-1 hover:text-blue-700"
                  ></IoBriefcaseOutline>{" "}
                  <h3>
                    CNSS{" "}
                    <smal className="text-gray-300 text-sm">
                      - 3 {t("months")}
                    </smal>
                  </h3>
                </div>
                <h4 className="leading-tight text-justify ">
                  Mission :{" "}
                  <small className="text-gray-300">{t("cnss_mission")}</small>
                </h4>
                <h4 className="leading-tight text-justify">
                  Technologies :{" "}
                  <small className="text-gray-300">
                    PHP, Mysql, HTML, CSS, AJAX, JScript.
                  </small>
                </h4>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div className="w-auto h-auto p-2 absolute top-1/2 -mt-3 -ml-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 shadow">
                  2016
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
