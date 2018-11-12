import test from 'ava';

import answer from '../answers/1.1';
import exercise from '../exercises/1.1';
import StockApi from '../shared/apis/stock';

test('Exercise 1.1 returns stocks from StockApi', async (t) => {
	const data = [{
		name: 'AEX',
		isin: 'NL0000000107',
	}, {
		nane: 'NASDAQ',
		isin: 'US6311031081',
	}];

	t.deepEqual(await answer(StockApi)(), data);
	t.deepEqual(await exercise(StockApi)(), data);
});

test('Exercise 1.1 with empty StockApi response throws', async (t) => {
	const fakeStockApi = {
		getIndexes() {
			return Promise.resolve({});
		},
	};

	const error = {
		instanceOf: Error,
		message: 'Unable to fetch stocks',
	};

	await t.throwsAsync(() => answer(fakeStockApi)(), error);
	await t.throwsAsync(() => exercise(fakeStockApi)(), error);
});
