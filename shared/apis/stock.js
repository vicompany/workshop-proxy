module.exports = {
	getIndexes() {
		return Promise.resolve({
			stocks: [{
				name: 'AEX',
				isin: 'NL0000000107',
			}, {
				nane: 'NASDAQ',
				isin: 'US6311031081',
			}],
		});
	},
};
