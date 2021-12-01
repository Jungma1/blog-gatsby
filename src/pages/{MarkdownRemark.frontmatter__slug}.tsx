import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/common/Layout';
import MainViewer from '../components/main/MainViewer';

export default function Template({ data }: any) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <MainViewer frontmatter={frontmatter} html={html} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        summary
        category
        tags
      }
    }
  }
`;
