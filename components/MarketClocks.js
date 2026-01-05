"use client";

import React, { useState, useEffect } from 'react';

const MarketClocks = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (timezone) => {
        return new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: timezone,
            hour12: true
        }).format(time);
    };

    return (
        <div className="market-clocks glass-panel-inner">
            <div className="clock-item">
                <span className="clock-label">New York (EST)</span>
                <span className="clock-time">{formatTime('America/New_York')}</span>
            </div>
            <div className="clock-separator">|</div>
            <div className="clock-item">
                <span className="clock-label">London (GMT)</span>
                <span className="clock-time">{formatTime('Europe/London')}</span>
            </div>
            <div className="clock-separator">|</div>
            <div className="clock-item">
                <span className="clock-label">Tokyo (JST)</span>
                <span className="clock-time">{formatTime('Asia/Tokyo')}</span>
            </div>
        </div>
    );
};

export default MarketClocks;
