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

<details open>
  <summary><b>📂 Project</b></summary>
  
  <br>

  - [x] 💪 **Latest JS support**
  - [x] 💎 **ReactJS & PropTypes**
  - [x] ⚡️ **ESLint, Prettier, EditorConfig**
  - [x] 🛠 **`.env` configuration**
  - [x] 📂 **Clean folder structure**
  - [x] 🚦 **Pre-commit hooks**
  - [x] 🤝 **Commit message linting**
  - [x] :🧗🏻‍♂️: **Built-in `semver` automation**
  - [x] 🚀 **Production ready**
</details>

<details open>
  <summary><b>🌿 Plugins</b></summary>
  
  <br>

  - [x] 💅 **[Styled Components](https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/)**
  - [x] 🔠 **[Web Font Loader](https://www.gatsbyjs.org/packages/gatsby-plugin-web-font-loader/)**
  - [x] ♻️ **[NProgress](https://www.gatsbyjs.org/packages/gatsby-plugin-nprogress)**
  - [x] 📈 **[Google Analytics](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/)**
  - [x] 📈 **[Facebook Pixel](https://www.gatsbyjs.org/packages/gatsby-plugin-facebook-pixel)**
  - [x] 📬 **[MailChimp](https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp)**
  - [x] ⛑ **[React Helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet)**
  - [x] 📜 **[Manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest)**
  - [x] 🤖 **[Robots.txt](https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt)**
  - [x] 🌐 **[Sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap)**
  - [x] ✈️ **[Offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline)**
  - [x] 👉 **[Webpack Root Import](https://www.gatsbyjs.org/packages/gatsby-plugin-root-import)**
  - [x] 🏋️‍♂️ **[Webpack Size](https://www.gatsbyjs.org/packages/gatsby-plugin-webpack-size/?=webpack-size)**
</details>

<details open>
  <summary><b>🔮 Extras</b></summary>
  
  <br>

  - [x] 🔮 **[Global Theme component](https://styled-components.com/docs/advanced#theming), a.k.a. `ThemeProvider`**
  - [x] 🔮 **[Normalize.css](http://necolas.github.io/normalize.css/) inside of the global theme wrapper**
  - [x] 🔮 **[Page component](https://www.gatsbyjs.org/docs/layout-components/)**
  - [x] 🔮 **Header component (stub)**
  - [x] 🔮 **Footer component (stub)**
  - [x] 🔮 **[SEO component with JSON-LD support](https://www.gatsbyjs.org/docs/add-seo-component/)**
</details>

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
│   ├── pages               # Pages
│   ├── theme               # Theme
│   └── App.js            # Main app wrapper
├── static                # Static assets
│   └── images
├── .commitlintrc.js      # Commitlint
├── .editorconfig         # EditorConfig
├── .env.example          # Default `dotenv` secrets
├── .eslintrc.js          # ESLint
├── .gitignore            # Ignored files by Git
├── .huskyrc.js           # Husky
├── .prettierrc.js        # Prettier
├── .versionrc.js         # Standard Version config
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

### 🎛 Configure

#### 🛠 `.env` configuration

You can provide environment variables to your site to customize its behavior in different environments. See Gatsby's guide on [environment variables](https://www.gatsbyjs.org/docs/environment-variables/).

_Gatsby's Node API can access both "OS Env Vars" and "Project Env Vars" all the time. Your client-side JS can access any "OS Env Vars" and any "Project Env Vars" prefixed with `GATSBY_`._

#### 🤝 Commit message linting

Keep your commit messages human- and robot-readable using a shared convention, i.e. [Commitlint](https://commitlint.js.org/#/).

[Husky's](https://github.com/typicode/husky) Git hooks make sure that your commit messages follow the convention. Moreover your code will be formatted and linted before every commit.

_You can use [Commitlint's CLI](https://commitlint.js.org/#/guides-use-prompt?id=guide-use-prompt) for fast authoring of your commit messages._

#### :🧗🏻‍♂️: Built-in `semver` automation

The package [standard-version](https://github.com/conventional-changelog/standard-version) helps you generate `CHANGELOG.md`, tag, and bump the version by following the [semver](https://semver.org) convention.

#### 👉 Webpack Root Import (Path Aliases)

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

#### 🔠 Web Font Loader

Set the font families you need and uncomment `gatsby-plugin-web-font-loader` in `gatsby-config.js`. That's it.

#### 🔮 Global Theme and Normalize.css

Decisions made about theme and styling.

1. Use `styled-components` for styling
2. The theme should wrap the application at the highest possible level via Gatsby's `wrapRootElement`
3. The theme should export definitions and utility functions from `theme/`
4. The theme should be accessible in any possible React-ish way, i.e. `import`, hooks, context, and in `styled\`\`` components.
5. The theme should be configurable to enable dynamic changes, e.g. to support dark mode

_Note: The `Page` component can be wrapped around any page created by Gatsby using `wrapPageElement` to avoid duplicate code. However, if we do this we lose control over it and cannot pass any helpful props like for instance `hideHeader`. Therefore each page under `pages/` should be wrapped with `Page` component. The repeating code is minimal and reasonable. See `src/pages/404.js` for example usage._

## 💫 Deploy

Do `yarn build` to build your app. The output in `public/` is your ready-to-use production bundle.

The `public/` folder can then be statically served by any CDN, [GitHub Pages](https://pages.github.com/) or more advanced service like [Netlify](https://www.netlify.com/).

Before deploying, make sure you run `yarn build && yarn serve` to preview your changes 🏁.
