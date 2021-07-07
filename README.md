## Table of Contents
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fj0lv3r4%2Fjolvera.dev.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fj0lv3r4%2Fjolvera.dev?ref=badge_shield)


- [Table of Contents](#table-of-contents)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [`npm run dev`](#npm-run-dev)
  - [`npm run build`](#npm-run-build)
  - [`npm run start`](#npm-run-start)
- [Using CSS](#using-css)

## Folder Structure

After creating an app, it should look something like:

```
.
├── README.md
├── components
│   ├── head.js
│   └── nav.js
├── next.config.js
├── node_modules
│   ├── [...]
├── package.json
├── pages
│   └── index.js
├── static
│   └── favicon.ico
└── yarn.lock
```

Routing in Next.js is based on the file system, so `./pages/index.js` maps to the `/` route and
`./pages/about.js` would map to `/about`.

The `./static` directory maps to `/static` in the `next` server, so you can put all your
other static resources like images or compiled CSS in there.

Out of the box, we get:

- Automatic transpilation and bundling (with webpack and babel)
- Hot code reloading
- Server rendering and indexing of `./pages`
- Static file serving. `./static/` is mapped to `/static/`

Read more about [Next's Routing](https://github.com/zeit/next.js#routing)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `npm run build`

Builds the app for production to the `.next` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start`

Starts the application in production mode.
The application should be compiled with \`next build\` first.

See the section in Next docs about [deployment](https://github.com/zeit/next.js/wiki/Deployment) for more information.

## Using CSS

[`tailwind`](https://tailwindcss.com/) is a utility-first CSS framework. We are using tailwind along with [`postcss`](https://github.com/postcss/postcss).

```jsx
export default () => (
  <div>
    Hello world
    <p className="flex-auto text-xl font-semibold">scoped!</p>
  </div>
)
```

Read more about [Next's CSS features](https://github.com/zeit/next.js#css).

