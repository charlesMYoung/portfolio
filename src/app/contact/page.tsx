import React from "react";
import { FaGithub, FaMailBulk } from "react-icons/fa";

function Contact() {
  return (
    <div className="px-12 md:px-28 font-SmileySans">
      <div className="text-on-background flex flex-col justify-center">
        <h1 className="display-xl text-secondary md:display-xxl">Hello</h1>
        <h2 className="title-large mt-6 font-SmileySans md:display-small">
          您可以通过以下方式联系我:{" "}
        </h2>
        <p className="font-SmileySans mt-12 flex space-x-8">
          <FaGithub className="text-6xl cursor-pointer"></FaGithub>
          <FaMailBulk className="text-6xl cursor-pointer"></FaMailBulk>
        </p>
      </div>
    </div>
  );
}

export default Contact;
