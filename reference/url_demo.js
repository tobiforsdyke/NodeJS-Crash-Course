const {URL} = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// SERIALISED URL
console.log(myUrl.href);
console.log(myUrl.toString());

// HOST (ROOT DOMAIN)
console.log(myUrl.host);

// HOSTNAME (DOES NOT GET PORT NUMBER)
console.log(myUrl.hostname);

// PATHNAME
console.log(myUrl.pathname);

// SERIALISED QUERY
console.log(myUrl.search);

// PARAMS OBJECT
console.log(myUrl.searchParams);

// ADD PARAM
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// LOOP THROUGH PARAMS
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));