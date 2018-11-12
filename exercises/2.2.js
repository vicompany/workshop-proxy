module.exports = (functionOrClass, Logger) => new Proxy(functionOrClass, {
	// TODO: log method calls using `Logger.log('some message')`
});
