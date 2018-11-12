module.exports = (functionOrClass, Logger) => new Proxy(functionOrClass, {
	apply(target, thisArgument, argumentList) {
		Logger.log(`"${target}" called with arguments [${argumentList.join(', ')}]`);

		return Reflect.apply(target, thisArgument, argumentList);
	},

	// Trap ES2015 class methods
	get(target, propertyKey, receiver) {
		const value = Reflect.get(target, propertyKey, receiver);

		if (typeof value !== 'function') {
			return value;
		}

		// If value is a method, wrap in current proxy
		return new Proxy(value, this);
	},
});
