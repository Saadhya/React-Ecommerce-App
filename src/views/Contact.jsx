import { useForm } from "@formspree/react";
import React from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mleqboow");
  if (state.succeeded) {
    return (
      // top-1/2 left-1/2 absolute
      <div className="flex justify-center items-center">
        <div className="bg-black/5 p-8 m-8">
          <h1 className="font-bold text-xl ">Thanks for joining!</h1>
          <p>The form was submitted successfully.</p>
          <button
            type="submit"
            disabled={state.submitting}
            className="addtoCart h-10 mt-4 w-full rounded px-2 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }
  // const handleChange = () => {};
  return (
    <div className="flex justify-center items-center flex-col text-black capitalize">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1B1lAsUpYFg82Je7XN1_cxRPf1UU&hl=en_US&ehbc=2E312F"
        width="640"
        height="480"
        loading="lazy"
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
      ></iframe>
      <h1 className="text-4xl my-4 py-2 tracking-wide font-bold ">
        Get in touch
      </h1>
      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          // action="https://formspree.io/f/mleqboow"
          // method="POST"
          className="flex justify-center items-center flex-col gap-6 my-4 mx-4"
        >
          <div className="w-full md:w-1/2 sm:w-1/2 lg:w-1/2 xl:w-1/3">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="flex w-full z-999 h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              autoComplete="off"
              autoCapitalize="on"
              placeholder="Enter your name"
              id="username"
              name="username"
              required
              // value={""}
              // onChange={handleChange}
            ></input>
          </div>
          <div className="w-full md:w-1/2 sm:w-1/2 lg:w-1/2 xl:w-1/3">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="username"
            >
              email
            </label>
            <input
              className="flex h-10 w-full z-999 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              autoComplete="off"
              autoCapitalize="on"
              placeholder="Enter email"
              id="email"
              // value={""}
              // onChange={handleChange}
              required
              name="email"
            ></input>
          </div>

          <div className="w-full md:w-1/2 sm:w-1/2 lg:w-1/2 xl:w-1/3">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              autoComplete="off"
              autoCapitalize="on"
              placeholder="Enter your message"
              id="message"
              // value={""}
              // onChange={handleChange}
              name="message"
              rows={4}
              cols={6}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="addtoCart md:w-1/2 lg:w-1/3 h-10 mt-4 w-full rounded px-2 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* <div className="w-full md:w-1/2 sm:w-1/3 lg:w-1/2 xl:w-1/3">
            <div className="grid grid-cols-2 gap-4 grid-flow-row ">
              <div className="min-w-full ">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="flex h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  autoComplete="off"
                  autoCapitalize="on"
                  placeholder="Enter username"
                  id="username"
                  onChange={handleChange}
                  name="username"
                  value={""}
                ></input>
              </div>
              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="username"
                >
                  email
                </label>
                <input
                  className="flex h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  autoComplete="off"
                  autoCapitalize="on"
                  placeholder="Enter email"
                  id="email"
                  // value={""}
                  // onChange={handleChange}
                  name="email"
                ></input>
              </div>
            </div>
          </div> */}
    </div>
  );
};

export default Contact;
