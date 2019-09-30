var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'zz11zz22zz33zz11zz22zz33' }, function(
  err,
  tunnel
) {
  console.log('LT running');
});
