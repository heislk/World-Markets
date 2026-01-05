"use client";

import React, { useState } from 'react';
import SimpleChart from './SimpleChart';

const IndicesTable = ({ data }) => {
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });
    const [expandedRow, setExpandedRow] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleRow = (symbol) => {
        if (expandedRow === symbol) {
            setExpandedRow(null);
        } else {
            setExpandedRow(symbol);
        }
    };

    const filteredData = React.useMemo(() => {
        if (!searchTerm) return data;
        return data.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [data, searchTerm]);

    const sortedData = React.useMemo(() => {
        let sortableItems = [...filteredData];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                let aValue = a[sortConfig.key];
                let bValue = b[sortConfig.key];

                if (typeof aValue === 'number' && typeof bValue === 'number') {
                } else {
                    aValue = String(aValue).toLowerCase();
                    bValue = String(bValue).toLowerCase();
                }

                if (aValue < bValue) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (aValue > bValue) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [filteredData, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const getSortIndicator = (key) => {
        if (sortConfig.key !== key) return '↕';
        return sortConfig.direction === 'ascending' ? '▲' : '▼';
    };

    return (
        <div className="table-wrapper">
            <div className="table-controls">
                <input
                    type="text"
                    placeholder="Search indices..."
                    className="search-input glass-panel-inner"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="table-container glass-panel">
                <table className="indices-table">
                    <thead>
                        <tr>
                            <th onClick={() => requestSort('region')}>Region {getSortIndicator('region')}</th>
                            <th onClick={() => requestSort('name')}>Index {getSortIndicator('name')}</th>
                            <th onClick={() => requestSort('price')}>Price {getSortIndicator('price')}</th>
                            <th onClick={() => requestSort('changePercent')}>% Return {getSortIndicator('changePercent')}</th>
                            <th onClick={() => requestSort('changeAmount')}>$ Gain {getSortIndicator('changeAmount')}</th>
                            <th onClick={() => requestSort('marketState')}>Status {getSortIndicator('marketState')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((idx) => {
                            const isPositive = (idx.changePercent || 0) >= 0;
                            const state = idx.marketState || 'CLOSED';
                            const isClosed = state === 'CLOSED' || state === 'POST' || state === 'PRE' || state === 'POSTPOST';

                            const rowColorClass = isClosed ? 'text-grey' : (isPositive ? 'text-green' : 'text-red');
                            const chartColor = isPositive ? '#22c55e' : '#ef4444';
                            const isExpanded = expandedRow === idx.symbol;

                            return (
                                <React.Fragment key={idx.symbol}>
                                    <tr
                                        onClick={() => toggleRow(idx.symbol)}
                                        className={`table-row ${isExpanded ? 'expanded' : ''}`}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <td>{idx.region}</td>
                                        <td className="font-bold">{idx.name}</td>
                                        <td>{idx.price?.toLocaleString()}</td>
                                        <td className={rowColorClass}>{idx.changePercent ? idx.changePercent.toFixed(2) : '0.00'}%</td>
                                        <td className={rowColorClass}>{idx.changeAmount ? idx.changeAmount.toFixed(2) : '0.00'}</td>
                                        <td className={`status-badge ${rowColorClass}`}>{state}</td>
                                    </tr>
                                    {isExpanded && (
                                        <tr className="expanded-row-content">
                                            <td colSpan="6">
                                                <div className="dropdown-container glass-panel-inner">
                                                    <div className="dropdown-layout">
                                                        <div className="chart-section">
                                                            <div className="chart-header">
                                                                <h4>{idx.name} Performance</h4>
                                                                <p>Intraday Trend (Simulated)</p>
                                                            </div>
                                                            <SimpleChart color={chartColor} isPositive={isPositive} />
                                                        </div>
                                                        <div className="stats-section">
                                                            <h5>Market Statistics</h5>
                                                            <div className="stats-grid">
                                                                <div className="stat-item">
                                                                    <span className="stat-label">Open</span>
                                                                    <span className="stat-value">{(idx.price * 0.99).toFixed(2)}</span>
                                                                </div>
                                                                <div className="stat-item">
                                                                    <span className="stat-label">High</span>
                                                                    <span className="stat-value">{(idx.price * 1.01).toFixed(2)}</span>
                                                                </div>
                                                                <div className="stat-item">
                                                                    <span className="stat-label">Low</span>
                                                                    <span className="stat-value">{(idx.price * 0.98).toFixed(2)}</span>
                                                                </div>
                                                                <div className="stat-item">
                                                                    <span className="stat-label">Volume</span>
                                                                    <span className="stat-value">{(Math.random() * 10).toFixed(1)}M</span>
                                                                </div>
                                                                <div className="stat-item">
                                                                    <span className="stat-label">52W High</span>
                                                                    <span className="stat-value">{(idx.price * 1.15).toFixed(2)}</span>
                                                                </div>
                                                                <div className="stat-item">
                                                                    <span className="stat-label">52W Low</span>
                                                                    <span className="stat-value">{(idx.price * 0.85).toFixed(2)}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default IndicesTable;
