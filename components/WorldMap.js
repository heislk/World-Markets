"use client";

import React, { memo, useState, useEffect } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";
import { Tooltip } from "react-tooltip";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const WorldMap = ({ data }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    return (
        <div className="map-container glass-panel">
            <ComposableMap projection="geoMercator" projectionConfig={{ scale: 120 }}>
                <ZoomableGroup center={[0, 20]} zoom={1} minZoom={1} maxZoom={4}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#2a2a2a"
                                    stroke="#404040"
                                    strokeWidth={0.5}
                                    style={{
                                        default: { outline: "none" },
                                        hover: { fill: "#333333", outline: "none" },
                                        pressed: { outline: "none" },
                                    }}
                                />
                            ))
                        }
                    </Geographies>

                    {data.map((idx) => {
                        const state = idx.marketState || 'CLOSED';
                        const isClosed = state === 'CLOSED' || state === 'POST' || state === 'PRE' || state === 'POSTPOST';
                        const isPositive = (idx.changePercent || 0) >= 0;

                        let color = '#737373';

                        if (!isClosed) {
                            color = isPositive ? '#22c55e' : '#ef4444';
                        }

                        const priceDisplay = idx.price ? idx.price.toLocaleString() : 'N/A';
                        const returnDisplay = idx.changePercent ? idx.changePercent.toFixed(2) : '0.00';
                        const gainDisplay = idx.changeAmount ? idx.changeAmount.toFixed(2) : '0.00';

                        const toolTipContent = `
               <div style="font-weight:bold; margin-bottom:4px;">${idx.name} (${idx.symbol})</div>
               <div>Price: ${priceDisplay}</div>
               <div>Return: ${returnDisplay}%</div>
               <div>Gain: ${gainDisplay}</div>
               <div style="font-size:0.8em; opacity:0.7; margin-top:4px;">${state}</div>
             `;

                        return (
                            <Marker key={idx.symbol} coordinates={[idx.long, idx.lat]}>
                                <a
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-html={toolTipContent}
                                    data-tooltip-place="top"
                                >
                                    <circle
                                        r={5}
                                        fill={color}
                                        stroke="#fff"
                                        strokeWidth={0.5}
                                        style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                                        className="marker-circle"
                                    />
                                    <text
                                        textAnchor="middle"
                                        y={1.5}
                                        style={{
                                            fontFamily: "system-ui",
                                            fill: "#fff",
                                            fontSize: "3px",
                                            fontWeight: "bold",
                                            pointerEvents: "none"
                                        }}
                                    >
                                        {Math.abs(idx.changePercent || 0).toFixed(1)}%
                                    </text>
                                </a>
                            </Marker>
                        );
                    })}
                </ZoomableGroup >
            </ComposableMap >
            {isMounted && <Tooltip id="my-tooltip" style={{ backgroundColor: "#262626", color: "#fff", borderRadius: "8px" }} />}
        </div>
    );
};

export default WorldMap;
