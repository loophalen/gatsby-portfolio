import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/Hero";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero content={data.hero.edges[0].node} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuerey = graphql`
  {
    hero: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            emoji
            subtitlePrefix
            subtitleHighlight
          }
          rawMarkdownBody
        }
      }
    }
  }
`;
