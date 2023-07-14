import React from "react";
import { FaGithub, FaMailchimp } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <div className="text-on-background flex flex-col justify-center">
        <h1 className="font-Lobster display-xl text-secondary md:display-xxl">
          Hello
        </h1>
        <h2 className="title-large mt-6 font-SmileySans md:display-small">
          您可以通过以下方式联系我:{" "}
        </h2>
        <p className="font-SmileySans mt-12 flex space-x-8">
          <FaGithub className="text-6xl cursor-pointer"></FaGithub>
          <FaMailchimp className="text-6xl cursor-pointer"></FaMailchimp>
        </p>
      </div>
    </div>
  );
}

export default Contact;
