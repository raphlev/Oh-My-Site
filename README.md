# Encoding

utf-8 using notepad++ > encoding   (if not utf-8, fontawsome will not work, liveserver hot reloading will not work, ..)

# install eslint

https://www.npmjs.com/package/eslint-config-airbnb-base

npx install-peerdeps --dev eslint-config-airbnb-base

add .eslintrc
{
    "extends": "airbnb-base"
}

# install koa-static to serve html file

npm i --save-dev koa-static
npm i --save-dev koa

## app.js

const serve = require('koa-static');
const Koa = require('koa');

const app = new Koa();

// or use absolute paths
app.use(serve(`${__dirname}`));

app.listen(3000);

// eslint-disable-next-line no-console
console.log('listening on port 3000: http://localhost:3000');
