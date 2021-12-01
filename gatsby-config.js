module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "desafiofinal3",
  },
  plugins: ["gatsby-plugin-styled-components",
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "alldata",    
      fieldName: "alldata",     
      url: "https://api-us-east-1.graphcms.com/v2/ckwktl7xo0qrw01z6glpdcl2y/master",
    }
  }
],
};
