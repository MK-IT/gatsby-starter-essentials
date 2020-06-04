# :blue_book: gatsby-starter

> Web app project starter with Gatsby

**Feel free to [submit improvements, bug reports and PRs](https://github.com/MK-IT/gatsby-starter-essentials/issues).**

**Any planned changes or improvements will be listed in [ROADMAP.md](./ROADMAP.md).**

## Features

### Project

- [x] :rocket: **Latest JS support**
- [x] :gem: **ReactJS & PropTypes**
- [x] :zap: **ESLint, Prettier, EditorConfig**
- [x] :wrench: **`.env` configuration**
- [x] :open_file_folder: **Clean folder structure**
- [x] :construction_worker: **`npm run` or `yarn` all the things**
- [x] :vertical_traffic_light: **Pre-commit hooks**
- [x] :100: **[Google Lighthouse 100/100 score](https://developers.google.com/web/tools/lighthouse/)**
- [x] :rocket: **Production ready**

### Plugins

- [x] :curly_loop: **[Prefetch fonts](https://www.gatsbyjs.org/packages/gatsby-plugin-prefetch-google-fonts/)**
- [x] :recycle: **[NProgress](https://www.gatsbyjs.org/packages/gatsby-plugin-nprogress)**
- [x] :chart_with_upwards_trend: **[Google Analytics](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/)**
- [x] :chart_with_upwards_trend: **[Facebook Pixel](https://www.gatsbyjs.org/packages/gatsby-plugin-facebook-pixel)**
- [x] :mailbox: **[MailChimp](https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp)**
- [x] :scroll: **[Manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest)**
- [x] :link: **[Helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet)**
- [x] :robot: **[Robots.txt](https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt)**
- [x] :globe_with_meridians: **[Sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap)**
- [x] :airplane: **[Offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline)**
- [x] :point_right: **[Webpack Root Import](https://www.gatsbyjs.org/packages/gatsby-plugin-root-import)**
- [x] :elephant: **[Webpack Size](https://www.gatsbyjs.org/packages/gatsby-plugin-webpack-size/?=webpack-size)**

### Components

- [x] :cyclone: **High-level `Page`, a.k.a. [layout](https://www.gatsbyjs.org/docs/layout-components/) component**
- [x] :mag_right: **`SEO` component with `json-ld` data**
- [x] :triangular_ruler: **`Container` component**
- [x] :star: **Text and Button [Gatsby Link](https://www.gatsbyjs.org/docs/gatsby-link/) component**

## Getting Started

### Setup

1. Clone the repository

```bash
git clone https://github.com/MK-IT/gatsby-starter-essentials <your-project-name>
```

2. Initialize Git

```bash
cd <your-project-name> && rm -rf .git && git init
```

3. Install the dependencies

```bash
yarn
```

4. Set up environment secrets

```bash
# .env remains local only so you can adapt all values to your liking
cp .env.example .env
```

5. Test your setup with production build and serve

```bash
yarn build && yarn serve
```

6. Develop

```bash
yarn develop
```

### Optional steps

- Configure, add, or remove plugins

```bash
nano gatsby-config.js
# Or any other editor like for instance Visual Studio Code
code gatsby-config.js
```

- Change JSON-LD values in `src/layout/SEO/SEO.js`

```bash
nano src/layout/SEO/SEO.js
# Or any other editor like for instance Visual Studio Code
code src/layout/SEO/SEO.js
```

- Replace default images

```bash
# Image used for favicon and manifest icons
cp <your-image-path> static/images/site_logo.png
# SEO and social media image
cp <your-image-path> static/images/site_social.png
```

- Configure `dotenv`

All environment variables get loaded through a utility script `env.js`. The script is used only in `gatsby-config.js` to read any variables defined in `.env` file and pre-load them into your app.

## Folder Structure

### Path Aliases

The project uses [Webpack's `resolve.alias`](https://webpack.js.org/configuration/resolve/#resolvealias) to support import aliases.

```bash
# Path aliases can be found in `gatsby-config.js` and `jsconfig.json`
~src --> src/
~pages --> src/pages/
~layout --> src/layout/
~containers --> src/containers/
~components --> src/components/
```

```js
// Instead of...
import MyComponent from '../../../components/MyComponent';
// You can do...
import MyComponent from '~components/MyComponent';
```

### TODO: Tree View

```bash
.
├── .vscode                               # VSCode workspace config
│   ├── extensions.json                     # Recommended extensions
│   └── settings.json                       # Workspace settings
├── src                                   # Source code
│   ├── components                          # Components
│   │   ├── Container                         # Section container
│   │   └── Link                              # Reusable Gatsby Link wrapped as Text and Button
│   ├── containers                          # Containers
│   ├── layout                              # High-level components
│   │   ├── Page                              # Page wrapper (Layout)
│   │   └── SEO                               # SEO
│   ├── pages                               # Pages
│   │   ├── 404.js                            # Customizable 404 page
│   │   └── index.js                          # Home page
│   ├── App.js                              # High-level app wrapper
│   ├── styles.css                          # High-level stylesheet imported in App.js
│   └── theme.js                            # MUI theme configuration
├── static                                # Statically served files
├── .editorconfig                         # EditorConfig
├── .env.example                          # dotenv secrets
├── .eslintrc.js                          # ESLint config
├── .gitignore                            # Ignored files by Git
├── .prettierrc.js                        # Prettier config
├── .release-it.js                        # release-it config
├── env.js                                # Utility for loading dotenv secrets
├── gatsby-browser.js                     # Gatsby CSR config
├── gatsby-config.js                      # Gatsby global config
├── gatsby-ssr.js                         # Gatsby SSR config
├── jsconfig.json                         # VSCode JS-specific config
├── package.json
├── README.md
├── ROADMAP.md
└── yarn.lock
```

## Available Scripts

### Develop, build, and serve.

```bash
# Local development
yarn develop

# Production build
yarn build

# Serve production build
yarn serve
```

### Releases and semver

The package [release-it](https://github.com/release-it/release-it) helps you tag and push your releases properly following the standard [semver](https://semver.org) convention.

```bash
yarn release
```

## Deploy

Running `yarn build` outputs a **ready-to-use production build** of your project to `public/`.

The `public/` folder can then be statically served by any CDN, [GitHub Pages](https://pages.github.com/) or more advanced service like [Netlify](https://www.netlify.com/).

Before deploying, make sure you run `yarn build && yarn serve` to preview your changes and prevent any build-time errors.

## Authors

**Stoyan Merdzhanov** - Initial work - [MK IT](https://mkit.io)

See also the list of [contributors](https://github.com/MK-IT/gatsby-starter-essentials/community_contributors) who participated in this project.

## Acknowledgments

A hat-tip to Fabian Schultz ([@fschultz\_](https://twitter.com/fschultz_))! This project was heavily inspired by his starter [`gatsby-universal`](https://github.com/fabe/gatsby-universal) and hard work!

## License

```
The MIT License (MIT)

Copyright (c) 2018-present MK IT Ltd. <hi@mkit.io>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
