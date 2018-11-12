const pattern = /^([0-9]+):([0-9]+)$/;

module.exports = array => new Proxy(array, {
	get(target, propertyKey, receiver) {
		if (typeof propertyKey === 'string' && propertyKey.match(pattern)) {
			const {
				1: start,
				2: end,
			} = propertyKey.match(pattern);

			return target.slice(
				Number.parseInt(start, 10),
				Number.parseInt(end, 10) + 1
			);
		}

		return Reflect.get(target, propertyKey, receiver);
	},
});
