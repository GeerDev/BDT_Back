const basicInfo = require('./basicInfo');
const components = require('./components');
const company = require('./company');

module.exports = {
    ...basicInfo,
    ...components,
    ...company
};