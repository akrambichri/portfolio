import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Contact() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState({
    severity: "info",
    icon: false,
    message: "loading",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setLoading(true);
    setAlert({
      severity: "info",
      icon: false,
      message: "loading",
    });
    setOpen(true);
    let myForm = document.getElementById("contact-form");
    let formData = new FormData(myForm);
    try {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      setLoading(false);
      setAlert({
        severity: "success",
        icon: null,
        message: "success",
      });
    } catch (error) {
      setLoading(false);
      setAlert({
        severity: "error",
        icon: null,
        message: "error",
      });
    }
  };
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">{t("contact")}</h1>
        <p className="pt-2">{t("get_in_touch")}</p>
      </div>
      <div className="mt-16 relative max-w-4xl mx-auto">
        <div className="absolute z-10 inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
        <div className="relative z-20 bg-white rounded-md shadow-md p-12">
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={() => setOpen(false)}
          >
            <Alert severity={alert.severity} icon={alert.icon}>
              {loading && (
                <CircularProgress className="p-0" size={16} color="white" />
              )}
              <label className="px-4 text-sm font-semibold text-white">
                {alert.message}
              </label>
            </Alert>
          </Snackbar>
          <form
            id="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit(onSubmit)}
          >
            <p class="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={t("name")}
                  className="w-full border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                  {...register("name", { required: true, maxLength: 80 })}
                />
                {errors.hasOwnProperty("name") && (
                  <p className="text-red-400">
                    {t(errors.name.type, { field: t("name"), length: "80" })}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder={t("email")}
                  className="w-full border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />{" "}
                {errors.hasOwnProperty("email") && (
                  <p className="text-red-400">
                    {t(errors.email.type, { field: t("email") })}
                  </p>
                )}
              </div>
              <div className="md:col-span-2">
                <input
                  type="text"
                  name="subject"
                  placeholder={t("subject")}
                  className="w-full border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 "
                  {...register("subject", { required: true, maxLength: 80 })}
                />{" "}
                {errors.hasOwnProperty("subject") && (
                  <p className="text-red-400">
                    {t(errors.subject.type, {
                      field: t("subject"),
                      length: "80",
                    })}
                  </p>
                )}
              </div>
              <div className="md:col-span-2">
                <textarea
                  rows="5"
                  name="message"
                  placeholder={t("message")}
                  className="w-full border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                  {...register("message", { required: true, maxLength: 180 })}
                ></textarea>{" "}
                {errors.hasOwnProperty("message") && (
                  <p className="text-red-400">
                    {t(errors.message.type, {
                      field: t("message"),
                      length: "180",
                    })}
                  </p>
                )}
              </div>
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
