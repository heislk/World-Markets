const yahooFinance = require('yahoo-finance2').default;

async function testFetch() {
    const symbol = '^GSPC';
    try {
        const quote = await yahooFinance.quote(symbol);
        console.log('SUCCESS:', quote.regularMarketPrice);
    } catch (err) {
        console.error('FAIL:', err.message);
        if (err.cause) console.error('CAUSE:', err.cause);
    }
}

testFetch();
