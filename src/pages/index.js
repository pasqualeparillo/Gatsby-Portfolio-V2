import React from "react";
import SEO from "../components/seo";
import Index from "../index/index";

const IndexPage = () => (
  <div className="w-full flex mx-auto flex-1 overflow-hidden bg-white relative">
    <SEO
      title="Pasquale Parillo - Software Engineer"
      keywords={[
        `Pasquale Parillo`,
        `Software Engineer`,
        `React`,
        `Developer`,
        "Software Engineer",
        "Seattle"
      ]}
    />
    <Index />
  </div>
);

export default IndexPage;
