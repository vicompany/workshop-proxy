module.exports = object => new Proxy(object, {
	set(target, property, value) {
		if (typeof value !== typeof Reflect.get(target, property)) {
			throw new TypeError('Property types mismatch');
		}

		return Reflect.set(target, property, value);
	},
});
