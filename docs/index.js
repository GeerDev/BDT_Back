const basicInfo = require('./basicinfo');
const components = require('./components');
const company = require('./company');

module.exports = {
    ...basicInfo,
    ...components,
    ...company
};