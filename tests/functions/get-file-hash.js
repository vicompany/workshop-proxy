const crypto = require('crypto');
const fs = require('fs');

module.exports = (file, algorithm = 'md5') => {
	if (!fs.statSync(file).isFile()) {
		throw new Error(`File "${file}" is not a file`);
	}

	const hash = crypto.createHash(algorithm);

	hash.update(fs.readFileSync(file));

	return hash.digest('hex');
};
