module.exports = {
  plugins: [
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/blog`,
      },
    },
    {
            resolve: `gatsby-source-filesystem`,
                options: {
                    path: `${__dirname}/static/assets`,
                    name: 'images',
                },
    },
    /*{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `categs`,
        path: `${__dirname}/cms/categorias`,
      },
    },*/
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://goofy-tereshkova-e4b6bf.netlify.app/',
        sitemap: 'https://goofy-tereshkova-e4b6bf.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                ],
            },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`
  ]
}