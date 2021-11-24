module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "desafiofinal3",
  },
  plugins: ["gatsby-plugin-styled-components",
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "SWAPI",    
      fieldName: "swapi",     
      url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    }
  }
],
};
