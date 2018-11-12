module.exports = (fn) => {
	if (typeof fn !== 'function') {
		throw new Error(`"${fn}" is not a function`);
	}

	const cache = new Map();

	return (...args) => {
		const key = args.join('-');

		if (cache.has(key)) {
			return cache.get(key);
		}

		const returnValue = Reflect.apply(fn, null, args);

		cache.set(key, returnValue);

		return returnValue;
	};
};
