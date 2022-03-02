import * as React from "react";
import { graphql } from 'gatsby';
import Hero from '../../hero/hero';
import Menu from '../../menu/menu.js';

import Footer from '../../footer/footer';

import '../../../scss/main.scss';

const PageTemplate = ({data}) => {
  console.log(data);
  return (
    <main>
      <Hero title="Rugby New Mexico" tagline="New Mexico's only youth rugby organization" />
      <Menu />
      <main className="container px-4 mx-auto md:px-0">
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </main>
      <Footer />
    </main>
  )
}

export default PageTemplate

export const pageTemplateQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
