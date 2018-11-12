module.exports = StockApi => async () => {
	const stocks = await StockApi.getIndexes();

	if (!('stocks' in stocks)) {
		throw new Error('Unable to fetch stocks');
	}

	return stocks.stocks;
};
