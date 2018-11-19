module.exports = ruleset => (field, value) => {
	// If no rules are defined for this field, no errors
	if (
		!Reflect.has(ruleset, field) ||
		!Array.isArray(Reflect.get(ruleset, field)) ||
		Reflect.get(ruleset, field).length === 0
	) {
		return [];
	}

	// Get errors from all rules
	return Reflect.get(ruleset, field)
		// eslint-disable-next-line no-undefined
		.map(rule => Reflect.apply(rule, undefined, [value]))
		.filter(rule => rule !== null);
};
