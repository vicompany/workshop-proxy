module.exports = ruleset => (field, value) => {
	// If no rules are defined for this field, no errors
	if (
		!(field in ruleset) ||
		!Array.isArray(ruleset[field]) ||
		ruleset[field].length === 0
	) {
		return [];
	}

	// Get errors from all rules
	return ruleset[field]
		.map(rule => rule(value)) // Bonus points
		.filter(rule => rule !== null);
};
