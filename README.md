# starter-webpack-es6-sass-php
Front-end starter kit with tools for development:

- webpack as module bundler
- es6 and babel
- sass as css preprocessor
- php for templating and future CMS integration

## Requirements
- Apache web server (e.g. XAMPP, MAMP, ...) for serving php files
- Set webpackDevServer proxy target based on project folder

## Usage
### Clone & Install
First clone the project and install dependencies.
```
git clone https://github.com/garousianstudio/starter-webpack-es6-sass-php.git
cd starter-webpack-es6-sass-php

# install dependencies
npm install
```

### Development:
By default project config is set to development mode. check `config.php` for more details. To work on source files run start task.
```
# start webpack dev server and open browser
npm start
```
### Build:
For deploying the project or overviewing what has been done, set `isDev` in `config.php` to `false` and run build task.
```
npm run build
```
Compiled `js`, `css` and `sprite.svg` files are generated in `build` folder at the root.

## Tasks
```
npm start => start webpack dev server and open browser
npm run build => use it for production
npm run clean => clean previously generated build folder
```

## Notes
- This starter is using 'iransans' as its default font type. If you want to use that, uncomment importing `fonts` in `src/scss/base/_base.scss` file and add files to fonts folder `public/fonts`. To use 'iransans' font visit their [home page](http://fontiran.com)


## License
MIT, see [LICENSE.md](https://github.com/garousianstudio/starter-webpack-es6-sass-php/blob/master/LICENSE) for details.


