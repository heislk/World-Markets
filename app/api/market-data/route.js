import yahooFinance from 'yahoo-finance2';
import { NextResponse } from 'next/server';

const INDICES = [
    { symbol: '^GSPC', name: 'S&P 500', region: 'North America', lat: 38, long: -97 },
    { symbol: '^DJI', name: 'Dow Jones', region: 'North America', lat: 43, long: -75 },
    { symbol: '^IXIC', name: 'Nasdaq', region: 'North America', lat: 40, long: -85 },
    { symbol: '^GSPTSE', name: 'S&P/TSX', region: 'North America', lat: 56, long: -106 },
    { symbol: '^MXX', name: 'IPC Mexico', region: 'North America', lat: 23, long: -102 },

    { symbol: '^BVSP', name: 'Bovespa', region: 'South America', lat: -14, long: -51 },
    { symbol: '^MERV', name: 'Merval', region: 'South America', lat: -34, long: -64 },
    { symbol: '^IPSA', name: 'IPSA', region: 'South America', lat: -33, long: -70 },

    { symbol: '^FTSE', name: 'FTSE 100', region: 'Europe', lat: 53, long: -2 },
    { symbol: '^GDAXI', name: 'DAX', region: 'Europe', lat: 51, long: 10 },
    { symbol: '^FCHI', name: 'CAC 40', region: 'Europe', lat: 46, long: 2 },
    { symbol: '^STOXX50E', name: 'Euro Stoxx 50', region: 'Europe', lat: 48, long: 13 },
    { symbol: '^IBEX', name: 'IBEX 35', region: 'Europe', lat: 40, long: -3 },
    { symbol: '^SSMI', name: 'SMI', region: 'Europe', lat: 46, long: 8 },

    { symbol: '^N225', name: 'Nikkei 225', region: 'Asia', lat: 36, long: 138 },
    { symbol: '^HSI', name: 'Hang Seng', region: 'Asia', lat: 23, long: 114 },
    { symbol: '^STI', name: 'Straits Times', region: 'Asia', lat: 1.3, long: 103.8 },
    { symbol: '^BSESN', name: 'Sensex', region: 'Asia', lat: 20, long: 78 },
    { symbol: '^KS11', name: 'KOSPI', region: 'Asia', lat: 37, long: 127 },
    { symbol: '000001.SS', name: 'Shanghai Comp', region: 'Asia', lat: 31, long: 121 },

    { symbol: '^AXJO', name: 'ASX 200', region: 'Oceania', lat: -25, long: 133 },
    { symbol: '^NZ50', name: 'NZX 50', region: 'Oceania', lat: -40, long: 174 },

    { symbol: '^TA125.TA', name: 'TA-125', region: 'Middle East', lat: 31, long: 34 },
];

const FALLBACK_DATA = {
    '^GSPC': { price: 4783.45, changePercent: 0.15, changeAmount: 7.2, marketState: 'REGULAR' },
    '^DJI': { price: 37689.54, changePercent: -0.05, changeAmount: -18.5, marketState: 'REGULAR' },
    '^IXIC': { price: 15011.35, changePercent: 0.45, changeAmount: 67.4, marketState: 'REGULAR' },
    '^GSPTSE': { price: 20958.44, changePercent: -0.12, changeAmount: -25.6, marketState: 'CLOSED' },
    '^MXX': { price: 57324.11, changePercent: 0.88, changeAmount: 504.2, marketState: 'CLOSED' },
    '^BVSP': { price: 132456.20, changePercent: -0.50, changeAmount: -665.4, marketState: 'REGULAR' },
    '^MERV': { price: 980123.00, changePercent: 1.20, changeAmount: 12000, marketState: 'REGULAR' },
    '^IPSA': { price: 6100.50, changePercent: -0.30, changeAmount: -18.2, marketState: 'REGULAR' },
    '^FTSE': { price: 7689.45, changePercent: 0.22, changeAmount: 16.8, marketState: 'CLOSED' },
    '^GDAXI': { price: 16752.33, changePercent: -0.35, changeAmount: -58.4, marketState: 'CLOSED' },
    '^FCHI': { price: 7450.22, changePercent: -0.15, changeAmount: -11.1, marketState: 'CLOSED' },
    '^STOXX50E': { price: 4480.55, changePercent: -0.20, changeAmount: -9.0, marketState: 'CLOSED' },
    '^IBEX': { price: 10111.40, changePercent: 0.40, changeAmount: 40.5, marketState: 'CLOSED' },
    '^SSMI': { price: 11120.30, changePercent: 0.10, changeAmount: 11.2, marketState: 'CLOSED' },
    '^N225': { price: 33450.10, changePercent: -0.80, changeAmount: -260.5, marketState: 'CLOSED' },
    '^HSI': { price: 16500.22, changePercent: -1.50, changeAmount: -250.0, marketState: 'CLOSED' },
    '^STI': { price: 3180.44, changePercent: 0.10, changeAmount: 3.2, marketState: 'CLOSED' },
    '^BSESN': { price: 71500.33, changePercent: 0.60, changeAmount: 430.2, marketState: 'CLOSED' },
    '^KS11': { price: 2580.44, changePercent: -0.25, changeAmount: -6.4, marketState: 'CLOSED' },
    '000001.SS': { price: 2950.22, changePercent: 0.20, changeAmount: 5.8, marketState: 'CLOSED' },
    '^AXJO': { price: 7490.55, changePercent: -0.10, changeAmount: -7.5, marketState: 'CLOSED' },
    '^NZ50': { price: 11650.33, changePercent: 0.05, changeAmount: 5.5, marketState: 'CLOSED' },
    '^TA125.TA': { price: 1980.45, changePercent: 1.10, changeAmount: 21.5, marketState: 'REGULAR' }
};

export async function GET() {
    try {
        const results = await Promise.all(
            INDICES.map(async (index) => {
                try {
                    const quote = await yahooFinance.quote(index.symbol);

                    return {
                        ...index,
                        price: quote.regularMarketPrice,
                        changePercent: quote.regularMarketChangePercent,
                        changeAmount: quote.regularMarketChange,
                        marketState: quote.marketState,
                    };
                } catch (err) {
                    const fallback = FALLBACK_DATA[index.symbol] || {};
                    return { ...index, ...fallback, fromFallback: true };
                }
            })
        );

        return NextResponse.json({ indices: results });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch market data' }, { status: 500 });
    }
}
