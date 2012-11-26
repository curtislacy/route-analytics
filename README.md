route-analytics
===============

A simple connect middleware module that logs requests and responses, transparently to the rest of your application.

usage
===============

route-analytics uses the "winston" package to do its actual logging, so you can provide configuration according to that project's documentation.  For example, all you need to do to add logging of requests and responses to the console is to add the properly configured middleware to Connect like this:

```js
var winston = require( 'winston' );
		app.use( require( 'route-analytics' )( {
			transports: [
				new (winston.transports.Console)()
			]
		}));
```