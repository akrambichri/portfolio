import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onSubmit = (data) => {
    let myForm = document.getElementById("contact-form");
    console.log(myForm);
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };
  console.log(errors);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">{t("contact")}</h1>
        <p className="pt-2">{t("get_in_touch")}</p>
      </div>
      <div className="mt-16 relative max-w-4xl mx-auto">
        <div className="absolute z-10 inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
        <div className="relative z-20 bg-white rounded-md shadow-md p-12">
          <form
            id="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  placeholder={t("name")}
                  className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                  {...register("name", { required: true, maxLength: 80 })}
                />
                {errors.hasOwnProperty("name") && (
                  <p className="text-red-400">
                    {errors.name.type === "required" ? t("required") : ""}
                  </p>
                )}
              </div>
              <input
                type="text"
                name="email"
                placeholder={t("email")}
                className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <input
                type="text"
                name="subject"
                placeholder={t("subject")}
                className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                {...register("subject", { required: true, maxLength: 80 })}
              />
              <textarea
                rows="5"
                name="message"
                placeholder={t("message")}
                className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                {...register("message", { required: true, maxLength: 80 })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-block w-auto mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
            >
              {t("send_message")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
