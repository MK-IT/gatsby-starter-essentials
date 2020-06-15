<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter Essentials
</h1>

[Gatsby default starter](https://github.com/gatsbyjs/gatsby-starter-default) extended with tools to help you boost your development experience.

_Feel free to [submit suggestions and bug reports](https://github.com/MK-IT/gatsby-starter-essentials/issues)._

## 🚀 Getting Started

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the `gatsby-essentials-starter`.

    ```shell
    # create a new Gatsby site using the `gatsby-essentials-starter` starter
    gatsby new hello-world https://github.com/MK-IT/gatsby-starter-essentials
    ```

2.  **Configure.**

    Navigate into your new site’s directory and copy the example `dotenv` secrets.

    ```shell
    cd hello-world && cp .env.example .env
    ```
    
    _Note: You can change any of the secrets defined in `.env`. However, all of the pre-defined variables are required by the installed Gatsby plugins._

3.  **Start developing.**

    Start it up.

    ```shell
    gatsby develop
    ```

    _Note: You can change the contents of `src/` in any way you like. The pre-defined pages and components are for demo purposes only._

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `hello-world` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## ⭐ Features

| Project                              | Plugins                                                                                           | Components                                                              |
| ------------------------------------ | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 💪 **Latest JS support**              | ♻️ **[NProgress](https://www.gatsbyjs.org/packages/gatsby-plugin-nprogress)**                      | 🌐 **[Page](https://www.gatsbyjs.org/docs/layout-components/)**          |
| 💎 **ReactJS & PropTypes**            | 📈 **[Google Analytics](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/)**       | 🌐 **Header (stub)**                                                     |
| ⚡️ **ESLint, Prettier, EditorConfig** | 📈 **[Facebook Pixel](https://www.gatsbyjs.org/packages/gatsby-plugin-facebook-pixel)**            | 🌐 **Footer (stub)**                                                     |
| 🛠 **`.env` configuration**           | 📬 **[MailChimp](https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp)**                      | 🌐 **[SEO + JSON-LD](https://www.gatsbyjs.org/docs/add-seo-component/)** |
| 📂 **Clean folder structure**         | ⛑ **[React Helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet)**                |                                                                         |
| 🚦 **Pre-commit hooks**               | 📜 **[Manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest)**                        |                                                                         |
| 🤝 **Commit message linting**         | 🤖 **[Robots.txt](https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt)**                    |                                                                         |
| :🧗🏻‍♂️: **Built-in `semver` automation** | 🌐 **[Sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap)**                          |                                                                         |
| 🚀 **Production ready**               | ✈️ **[Offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline)**                          |                                                                         |
|                                      | 👉 **[Webpack Root Import](https://www.gatsbyjs.org/packages/gatsby-plugin-root-import)**          |                                                                         |
|                                      | 🏋️‍♂️ **[Webpack Size](https://www.gatsbyjs.org/packages/gatsby-plugin-webpack-size/?=webpack-size)** |                                                                         |

### 🛠 `.env` configuration

You can provide environment variables to your site to customize its behavior in different environments. See Gatsby's guide on [environment variables](https://www.gatsbyjs.org/docs/environment-variables/).

_Gatsby's Node API can access both "OS Env Vars" and "Project Env Vars" all the time. Your client-side JS can access any "OS Env Vars" and any "Project Env Vars" prefixed with `GATSBY_`._

### 🤝 Commit message linting

Keep your commit messages human- and robot-readable using a shared convention, i.e. [Commitlint](https://commitlint.js.org/#/).

[Husky's](https://github.com/typicode/husky) Git hooks make sure that your commit messages follow the convention. Moreover your code will be formatted and linted before every commit.

_You can use [Commitlint's CLI](https://commitlint.js.org/#/guides-use-prompt?id=guide-use-prompt) for fast authoring of your commit messages._

### :🧗🏻‍♂️: Built-in `semver` automation

The package [standard-version](https://github.com/conventional-changelog/standard-version) helps you generate `CHANGELOG.md`, tag, and bump the version by following the [semver](https://semver.org) convention.

### 👉 Webpack Root Import (Path Aliases)

The project uses [Webpack's `resolve.alias`](https://webpack.js.org/configuration/resolve/#resolvealias) feature to ease module imports.

```bash
# path aliases can be found in `gatsby-config.js`, `jsconfig.json`, and `.eslintrc.js`
~src --> src/
~pages --> src/pages/
~layout --> src/layout/
~containers --> src/containers/
~components --> src/components/
```

```js
// instead of...
import MyComponent from '../../../components/MyComponent';
// you can do...
import MyComponent from '~components/MyComponent';
```

## 🧐 What's inside?

### 👷‍♂️ Available Scripts

```bash
# local development
yarn develop

# production build
yarn build

# serve production build
yarn serve

# clean tmp files (.cache, public)
yarn clean

# format code with Prettier
yarn format

# lint code with ESLint
yarn lint

# semver and release
yarn release
```

### 📂 Folder Structure

```bash
.
├── .vscode               # VSCode workspace config
│   ├── extensions.json
│   └── settings.json
├── src                   # Source code
│   ├── components          # Components
│   ├── containers          # Containers
│   ├── layout              # Top level "layout" components
│   └── pages               # Pages
├── static                # Static assets
│   └── images
├── .commitlintrc.js      # Commitlint
├── .editorconfig         # EditorConfig
├── .env.example          # Default `dotenv` secrets
├── .eslintrc.js          # ESLint
├── .gitignore            # Ignored files by Git
├── .huskyrc.js           # Husky
├── .prettierignore       # Ignored files by Prettier
├── .prettierrc.js        # Prettier
├── gatsby-browser.js     # Gatsby Browser API
├── gatsby-config.js      # Gatsby Config
├── gatsby-node.js        # Gatsby Node API
├── gatsby-ssr.js         # Gatsby SSR API
├── jsconfig.json         # VSCode JS settings
├── CHANGELOG.md
├── LICENSE
├── README.md
├── ROADMAP.md
├── package.json
└── yarn.lock
```

## 💫 Deploy

Do `yarn build` to build your app. The output in `public/` is your ready-to-use production bundle.

The `public/` folder can then be statically served by any CDN, [GitHub Pages](https://pages.github.com/) or more advanced service like [Netlify](https://www.netlify.com/).

Before deploying, make sure you run `yarn build && yarn serve` to preview your changes 🏁.
