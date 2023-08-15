"use client";
import axios from "axios";
import { useState } from "react";
import { BiSend } from "react-icons/bi";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { verifyCaptchaAction } from "@/app/_actions/Captha";
import { Grid } from "react-loader-spinner";
import FormResponse from "./FormResponse";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [responseStatus, setResponseStatus] = useState(false);
  const [responseText, setResponseText] = useState("Some text");
  const [responseIsOpen, setResponseIsOpen] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    console.log("handling submit...");
    if (!executeRecaptcha) {
      console.log("without execute recaptcha...");
      return;
    } 
    const token = await executeRecaptcha("onSubmit");
    const verified = await verifyCaptchaAction(token);
    if (event.target.name.value || event.target.email.value || !verified) {
      console.log("name or email honey...");
      setResponseStatus(false);
      setResponseText(
        "Try reloading the site and submitting the form again! If that doesn't help, use my email to contact me: danylo.sokol2504@gmail.com."
      );
       setLoading(false);
      return;
    } else{
      const data = {
        name: event.target.honeyfreename.value,
        email: event.target.honeyfreeemail.value,
        message: event.target.message.value,
      };
      console.log("Sending data:");
      console.log(data);
      await axios
        .post("/api/contactForm", data)
        .then(function (response) {
          setResponseIsOpen(true);
          setResponseStatus(response.data.status);
          setResponseText(
            response.data.text
          );
          setLoading(false);
          event.target.reset();
          return;
        })
        .catch(function (error) {
          console.log(error);
          setResponseIsOpen(true);
          setResponseStatus(false);
          setResponseText(
            "Try reloading the site and submitting the form again! If that doesn't help, use my email to contact me: danylo.sokol2504@gmail.com."
          );
          setLoading(false);
          event.target.reset();
          return;
        });
    }
  };

  return (
    <section className="mb-24">
      <h2 className="font-semibold text-4xl mb-8">Get in touch!</h2>
      <section className="flex flex-wrap gap-y-8 gap-x-5 justify-around lg:justify-between">
        <form onSubmit={handleSubmit} method="POST" className="w-full">
          <input
            type="text"
            name="name"
            className="block w-0 h-0 m-0 p-0 border-0"
            autoComplete="new-password"
            aria-hidden="true"
          />
          <input
            type="email"
            name="email"
            className="block w-0 h-0 m-0 p-0 border-0"
            autoComplete="new-password"
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div className="relative">
              <input
                type="text"
                id="fullName"
                name="honeyfreename"
                required
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-primary-lighter border-1 border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-primary-lighter peer"
                placeholder=" "
              />
              <label
                htmlFor="fullName"
                className="absolute text-base text-secondary-bright duration-300 transform -translate-y-4 scale-85 top-2 z-10 origin-[0] bg-transparent peer-focus:px-1.5 peer-focus:text-secondary-bright peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-85 peer-focus:-translate-y-4 left-1"
              >
                Full Name *
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="honeyfreeemail"
                pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                required
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-primary-lighter border-1 border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-primary-lighter peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-accent-wrong"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-base text-secondary-bright duration-300 transform -translate-y-4 scale-85 top-2 z-10 origin-[0] bg-transparent peer-focus:px-1.5 peer-focus:text-secondary-bright peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-85 peer-focus:-translate-y-4 left-1"
              >
                Email *
              </label>
            </div>
          </div>
          <div className="relative w-full mb-3">
            <textarea
              id="floating_outlined"
              required
              name="message"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-primary-lighter border-1 border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-primary-lighter peer"
              placeholder=" "
            ></textarea>
            <label
              htmlFor="floating_outlined"
              className="absolute text-base text-secondary-bright duration-300 transform -translate-y-4 scale-85 top-2 z-10 origin-[0] bg-transparent peer-focus:px-1.5 peer-focus:text-secondary-bright peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[1.5rem] peer-focus:top-2 peer-focus:scale-85 peer-focus:-translate-y-4 left-1"
            >
              Your message *
            </label>
          </div>
          <div id="captcha" className="hidden"></div>
          {loading ? (
            <div className="w-full flex justify-center items-center">
              <Grid
                height="40"
                width="40"
                color="#fff"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          ) : (
            <button className="flex items-center justify-center border border-secondary duration-500 hover:bg-primary-lighter py-2 px-4 text-center cursor-pointer font-medium gap-x-2 outline-none w-full">
              <BiSend />
              Send
            </button>
          )}
        </form>
        <FormResponse
          responseStatus={responseStatus}
          responseText={responseText}
          isOpen={responseIsOpen}
          setIsOpen={setResponseIsOpen}
        />
      </section>
    </section>
  );
}
