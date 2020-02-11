<h1 align="center">
 Mika Starter Pack
</h1>

## Prerequisites
The following tools should be installed before starting:
* NodeJS, npm
* Ruby, Gem, Bundler
* Jekyll
* Sass

## Quick start
1. Make sure you have all the prerequisites above installed.
2. Clone this repo using `git clone https://github.com/sandoche/Jekyll-webpack-boilerplate.git`
3. Move to the appropriate directory: `cd Jekyll-webpack-boilerplate`.
4. Run `npm install` and `bundler install` in order to install dependencies and clean the git repo.
5. Run `npm start` to start the development server (or use `npm start`).

## Quick deployment
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sandoche/Jekyll-webpack-boilerplate)

Here is a demo of the Netlify build: https://dazzling-swartz-9738b5.netlify.com

### Netlify CMS

It also works with Netlify CMS after enabling  Identity service and Git Gateway: https://www.netlifycms.org/docs/add-to-your-site/#enable-identity-and-git-gateway

See `admin/config.yml` for more customization.

## Development
To start the development server just run  `npm start`

### Folder structure
```
.
├── 404.html
├── about.md
├── blog.md
├── config <--- This folder contains the different Webpack config files
│   ├── optimization-fix <--- A fix for optimization, do not delete this folder
│   ├── postcss.config.js <--- Post css config
│   ├── sw.config.js <--- The service worker config file
│   ├── webpack.common.js <--- The common Webpack config file for all the environment
│   ├── webpack.dev.js <--- Dev Webpack environment config file
│   ├── webpack.optim.js <--- This is used to add the css critical path in the default template
│   ├── webpack.prod.js <--- Prod Webpack environment config file
│   └── webpack.pwa.js <--- Please edit this file if you want a PWA
├── _config.yml <--- The Jekyll config file that you need to set up
├── Gemfile
├── Gemfile.lock
├── _i18n <--- Contains your posts and data in the language you need (check below how to remove it)
├── _images <--- Put all your images here, you will access them with this path /assets/images/
│   ├── icon.png <--- Replace this with your icon
│   └── large-icon.png <--- Replace this with your Facebook Open Graph picture
├── icon.png <--- Same with this one
├── _includes
├── index.md
├── _layouts
│   ├── amp.html <--- The layout for Accelerated mobile page
│   ├── blog.html
│   ├── home.html
│   ├── page.html
│   └── post.html
├── LICENSE
├── package.json <--- Update this file with your information especially the name which is used for the meta tags
├── README.md
├── _scss <--- Put your partials here
│   └── _default.scss
├── _src <--- This folder contains your JS and SASS entry points
│   ├── index.js
│   ├── index.scss
│   └── template
│       └── default.html <--- Here is the main default template, feel free to edit it but do not delete it
├── webpack.config.js
└── package-lock.json
```

## Build

### Optimized website
To build the website run the following line

```
npm run build

# or if you want the critical css
npm run build:optim
```
The built website will be in `_site` folder.

You can also run a local server to test it with this command
```
npm run serve:dist
```

\

### Clean assets & \_site folders
This will remove the generated folders
```
npm run clean:project
```

## Known issues
* Jekyll watch doesn't reload / rebuild when a translation file is updated inside `_i18n` folder, I recommand to remove `jekyll-multiple-languages-plugin` if you don't want a multi language website and if you want to watch / rebuild faster. Otherwise close and start  `npm run start` to rebuild and see your changes from `_i18n`
* The critical CSS Path may show some weird behavior when the page is loading that is why there are separated npm scripts







