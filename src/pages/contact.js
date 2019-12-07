import React from "react";
import SEO from "../components/seo";
import Contact from "../contact/index";

const ContactPage = () => (
  <div className="w-full flex mx-auto flex-1 overflow-hidden bg-white relative">
    <SEO
      title="Pasquale Parillo - Contact"
      keywords={[
        `Pasquale Parillo`,
        `Software Engineer`,
        `React`,
        `Developer`,
        "Software Engineer",
        "Seattle"
      ]}
    />
    <Contact />
  </div>
);

export default ContactPage;
