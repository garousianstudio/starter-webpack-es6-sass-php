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
```
git clone https://github.com/garousianstudio/starter-webpack-es6-sass-php.git
cd starter-webpack-es6-sass-php

# install dependencies
npm install

# start webpack dev server and open browser
npm start
```

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


