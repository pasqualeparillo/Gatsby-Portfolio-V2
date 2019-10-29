import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../css/style.css";
import Index from "../index/index";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Index />
  </Layout>
);

export default IndexPage;
