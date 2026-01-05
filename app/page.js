"use client";

import React, { useEffect, useState, useCallback } from 'react';
import WorldMap from '../components/WorldMap';
import IndicesTable from '../components/IndicesTable';
import MarketClocks from '../components/MarketClocks';

export default function Home() {
    const [marketData, setMarketData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [lastUpdated, setLastUpdated] = useState(new Date());

    const fetchData = useCallback(async (showLoading = true) => {
        if (showLoading) setIsRefreshing(true);
        try {
            const res = await fetch('/api/market-data');
            const data = await res.json();
            if (data.indices) {
                setMarketData(data.indices);
                setLastUpdated(new Date());
            }
        } catch (error) {
            console.error("Failed to fetch data", error);
        } finally {
            if (showLoading) setIsRefreshing(false);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
        const interval = setInterval(() => {
            fetchData(false);
        }, 60000);

        return () => clearInterval(interval);
    }, [fetchData]);

    return (
        <main className="main-content">
            <header className="hero-section">
                <div className="header-top">
                    <div>
                        <h1 className="title-gradient">World Markets</h1>
                        <p className="subtitle">Real-time global market indices visualization</p>
                    </div>
                    <div className="header-controls">
                        <div className="last-updated">
                            Updated: {lastUpdated.toLocaleTimeString()}
                        </div>
                        <button
                            onClick={() => fetchData(true)}
                            className={`refresh-btn ${isRefreshing ? 'spinning' : ''}`}
                            aria-label="Refresh Data"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M23 4v6h-6"></path>
                                <path d="M1 20v-6h6"></path>
                                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <MarketClocks />
            </header>

            {loading ? (
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p>Loading Market Data...</p>
                </div>
            ) : (
                <>
                    <section className="map-section">
                        <WorldMap data={marketData} />
                    </section>

                    <section className="table-section">
                        <h2 className="section-title">Market Data</h2>
                        <IndicesTable data={marketData} />
                    </section>
                </>
            )}
        </main>
    );
}
