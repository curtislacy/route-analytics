route-analytics
===============

A simple connect middleware module that logs requests and responses, transparently to the rest of your application.

Usage
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

License
===============
The MIT License (MIT)
Copyright © 2012 Engine, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.