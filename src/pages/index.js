import React from "react";

import Welcome from "../components/welcome";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Table from "../components/table";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Welcome />
      <Table />
    </Layout>
  );
}

export default IndexPage;
