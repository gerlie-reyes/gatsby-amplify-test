module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "great-gatsby-amplified",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://localhost:8080/graphql",
      },
    },
    "gatsby-plugin-styled-components",
  ],
};
