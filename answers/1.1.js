module.exports = StockApi => async () => {
	const stocks = await StockApi.getIndexes();

	if (!Reflect.has(stocks, 'stocks')) {
		throw new Error('Unable to fetch stocks');
	}

	return stocks.stocks;
};
