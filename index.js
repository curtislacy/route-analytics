function Logger( config ) {
	this.winston = new ( require( 'winston' ).Logger)( config );
}
Logger.prototype.logRequest = function( req ) {
	var url = req.url;
	if( req.user )
		var user = req.user.identifier;
	else
		var user = 'none';

	var now = Date.now();
	req.startTimeMillis = now.valueOf();
	this.winston.info( now + ', ROUTE-ANALYTICS, request, ' + url + ', ' + user );
}
Logger.prototype.logResponse = function( req, res ) {
	var url = req.url;
	if( req.user )
		var user = req.user.identifier;
	else
		var user = 'none';

	var now = Date.now();
	this.winston.info( now + ', ROUTE-ANALYTICS, response, ' + url + ', ' + user );
	if( req.startTimeMillis )
		this.winston.info( now + ', ROUTE-ANALYTICS, duration, ' + ( now.valueOf() - req.startTimeMillis ) + ' ms, ' + url + ', ' + user );
}

module.exports = exports = function( config ) {
	var config = config;

	var log = new Logger( config );

	return function( req, res, next ) {
		log.logRequest( req );

		var endFunction = res.end;
		res.end = function( data, encoding ) {
			log.logResponse( req, res );
			endFunction( data, encoding );
		}
		next();
	};
};
