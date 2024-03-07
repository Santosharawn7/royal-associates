import React, { useState } from "react";
import { sendEmailConfirmation } from "./Sendemailconfirm";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  // const [phone, setPhone] = useState("");
  const form = React.useRef();

  const sendEmail = async (e) => {
    try {
      const isSendComplete = await sendEmailConfirmation(email, name, subject);
      console.log(email, name, subject)
      if (isSendComplete) return console.log(isSendComplete)
        throw new Error("send error")
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <section class="relative overflow-hidden bg-stone-400 py-12 md:py-12" id="contactUs">
      <div class="container relative mx-auto px-4">
        <div class="absolute left-0 top-0 h-full w-full px-4">
          <div class="bg-radial-dark-green rounded-3xl px-8 pt-96">
            <img
              class="mx-auto block"
              src="aurora-assets/contact/lines-background-green.png"
              alt=""
            />
          </div>
        </div>
        <div class="relative md:flex px-10 py-16">
          <div class=" font-serif text-center m-auto max-w-auto" >
            <h1 class="font-heading mb-10 text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl">
            CONTACT US
            </h1>
            <p class="text-lg mb-2 text-gray-600">
            Fill out the form and we will be in touch with you shortly.
            </p>
            <p class="text-xl mb-4 text-gray-600">
            Tel:<a href="tel:647-233-2991">647-233-2991</a>
            </p>
            <a
              href="mailto:royalassociates.legal@gmail.com"
            >
              <span className=" text-medium md:text-2xl italic mb-4 text-gray-600 hover:underline">royalassociates.legal@gmail.com</span>
            </a>
          </div>
          <div class="mx-auto md:flex-1 md:max-w-[700px] mt-4 rounded-xl border border-gray-700 bg-stone-500 p-8">
            
            <form action="">
              <div class="mb-4">
                <label class="mb-1 block text-sm font-medium text-white" for="">
                  Name
                </label>
                <input
                  class="focus:border-yellowGreen-800 focus:ring-yellowGreen-800 h-11 w-full rounded-md border border-gray-700 bg-gray-100 px-4 py-2 text-gray-500 placeholder-gray-500 outline-none ring ring-transparent"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                />
              </div>
              <div class="mb-4">
                <label class="mb-1 block text-sm font-medium text-white" for="">
                  Email
                </label>
                <input
                  class="focus:border-yellowGreen-800 focus:ring-yellowGreen-800 h-11 w-full rounded-md border border-gray-700 bg-gray-100 px-4 py-2 text-gray-500 placeholder-gray-500 outline-none ring ring-transparent"
                  type="email"
                  placeholder="john@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <div class="mb-4">
                <label class="mb-1 block text-sm font-medium text-white" for="">
                  Phone
                </label>
                <input
                  class="focus:border-yellowGreen-800 focus:ring-yellowGreen-800 h-11 w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-gray-500 placeholder-gray-500 outline-none ring ring-transparent"
                  type="phone"
                  placeholder="+1 123 456 7890"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div> */}
              <div class="mb-4">
                <label class="mb-1 block text-sm font-medium text-white" for="">
                  Subject
                </label>
                <input
                  class="focus:border-yellowGreen-800 focus:ring-yellowGreen-800 h-11 w-full rounded-md border border-gray-700 bg-gray-100 px-4 py-2 text-gray-600 placeholder-gray-500 outline-none ring ring-transparent"
                  type="text"
                  onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                />
          </div>
          <div class="mb-8">
            <label class="mb-1 block text-sm font-medium text-white" for="">
              Message
            </label>
            <textarea
              class="focus:border-yellowGreen-800 focus:ring-yellowGreen-800 block h-32 w-full resize-none rounded-md border border-gray-00 bg-gray-100 px-4 py-2 text-gray-500 placeholder-gray-500 outline-none ring ring-transparent"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            class="xs:flex-shrink-0 xs:inline-flex bg-stone-700 group relative flex h-14 w-full items-center justify-center rounded-lg p-px px-4 font-bold text-white transition-all duration-300 focus:outline-none"
            type="submit"
            onClick={(e) => {

              sendEmail()
              }}
          >
            <div class="ring-yellowGreen-900 absolute left-0 top-0 h-full w-full animate-pulse rounded-lg ring transition duration-300 group-hover:ring-0"></div>
            <span>Submit</span>
          </button>
        </form>
       
      </div>
      
    </div>
    <iframe
          className="w-full h-96 rounded-3xl pb-4"
          src="https://maps.google.com/maps?q=Royal Associates Head Office, Main Street, East York,
                      Toronto, ON M4C 4X3&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        ></iframe>
        <p className="text-sm md:text-base pb-1 font-serif italic mb-4 text-gray-600 hover:underline">​​​​Copyright © 2023 Royal Associates. </p>
        <p className="text-sm md:text-base font-serif italic mb-4 text-gray-600 hover:underline">The information provided on this website is for information purposes only and does not <br></br> constitute legal advice.</p>
      </div >
    </section >
  );
};
export default Contact;
