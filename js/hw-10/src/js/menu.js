import menuData from './menu.json'

let menuTpl = require("../template/menu.hbs");

document.querySelector('.menu.js-menu').insertAdjacentHTML('afterbegin', menuTpl({menuData}));


