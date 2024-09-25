## 💡 About

This is project of website of polish branding agency - Brandwell made in [Gatsby](https://www.gatsbyjs.com). It's focused on the best possible performance with the highest quality of presented images.

Website is focused on presenting images of realised projects. Images are [art directed](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiY7cyhnLXxAhXVCRAIHTSqBAMQFjALegQIBhAD&url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FHTML%2FMultimedia_and_embedding%2FResponsive_images&usg=AOvVaw3Zm06JzHu3NvqVx0VJPofd) for best experience on every device thanks to [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image).
Image placeholders are trace-colored and when user enters viewport, webp images are loaded and fallback to jpg if not supported.
Site is styled using [styled-components](https://styled-components.com)


Sites other features are:
- Multilingual with urls translation by [gatsby-plugin-react-i18next](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/),
- SEO optimized with sitemap by [gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/) [gatsby-plugin-sitemap](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/)

## 🗄 Content

All projects on website are fetched on build time from `content/projects` directory. Project page is made of blocks of text and images. Occurrence of it is defined in `default.md`
1. `default.md`
   This file is in every project's directory. 
   It contains project's details for all 
   language versions and description in default language (in this case polish).
2. `en.md` English description of project.

## 🧑🏼‍💻 Development

1. **Requirements**
    - Node 14+
    - Gatsby CLI
2. **Scripts**

| Command                    | Description                              |
| ------------------ | ----- |
| `gatsby develop`   | Run development server with live reloading   |
| `gatsby build`     | Creates optimized production-ready application files   |
| `gatsby serve`     | Serve built page     |
| `gatsby clean`     | Clears `.cache` and `public` directories    |

## 🌐 Translations

Translations are stored in three places.
- md files for projects are processed in `gatsby-config`. 
- `src/intl/routeTranslations.json` for urls. Keys of json must match with pages names in `src/pages`
- other in `src/intl/{langage_code}`

Queries in `src/templates/ProjectTemplate.jsx` must only access fields available in all languages. 
To get common details for all languages you must do it in `gatsby-node.js`

## 🌍 Live

https://www.brandwell.pl
