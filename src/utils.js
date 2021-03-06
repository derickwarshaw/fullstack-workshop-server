/**
 * turns an object into a URL query string, prefixed with `?`
 * ex: paramsObjectToURLString({foo: 'bar', baz: 'bar'}) === '?foo=bar&baz=bar'
 */
const paramsObjectToURLString = params =>
  `?${Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&')}`;

module.exports = {
  paramsObjectToURLString,
};
