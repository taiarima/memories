import React from "react";
import Button from "../components/Button";

export default function Contact() {
  return (
    <div>
      <div className="w-full p-4 pt-20 text-white">
        <div className="mx-auto flex h-full max-w-screen-lg flex-col justify-center p-4">
          <div className="flex flex-col items-center pb-8">
            <p className="inline border-b-4 border-gray-500 text-4xl font-bold">
              Contact
            </p>
            <p className="py-4">
              Fill out the form below to ask questions or receive support
            </p>
          </div>
          <div className="flex items-center justify-center">
            <form
              className="flex w-full flex-col md:w-1/2"
              action=""
              method="POST"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="my-2 rounded-md border-2 bg-customTeal p-2 font-bold text-black placeholder:text-slate-600 focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Your email address"
                className="my-2 rounded-md border-2 bg-customTeal p-2 font-bold text-black placeholder:text-slate-600 focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="my-2 rounded-md border-2 bg-customTeal p-2 font-bold text-black placeholder:text-slate-600 focus:outline-none"
              ></textarea>
              <div className="text-center">
                <Button onClick={() => "nothing"}>Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
