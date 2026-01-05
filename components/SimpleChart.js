"use client";

import React, { useMemo, useState, useRef } from 'react';

const SimpleChart = ({ data, color, isPositive }) => {
    const [hoverData, setHoverData] = useState(null);
    const svgRef = useRef(null);

    const points = useMemo(() => {
        if (!data || data.length === 0) {
            return Array.from({ length: 40 }, (_, i) => ({
                x: i,
                y: 100 + Math.random() * 20 - 10 + (isPositive ? i * 0.5 : -i * 0.5),
                time: `${9 + Math.floor(i / 6)}:${(i % 6) * 10 || '00'}`
            }));
        }
        return data;
    }, [data, isPositive]);

    const width = 600;
    const height = 250;
    const padding = 40;

    const minX = Math.min(...points.map(p => p.x));
    const maxX = Math.max(...points.map(p => p.x));
    const minY = Math.min(...points.map(p => p.y));
    const maxY = Math.max(...points.map(p => p.y));

    const getX = (val) => ((val - minX) / (maxX - minX)) * (width - 2 * padding) + padding;
    const getY = (val) => height - padding - (((val - minY) / (maxY - minY)) * (height - 2 * padding));

    const pathD = points.map((p, i) =>
        `${i === 0 ? 'M' : 'L'} ${getX(p.x)},${getY(p.y)}`
    ).join(' ');

    const handleMouseMove = (e) => {
        if (!svgRef.current) return;
        const rect = svgRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;

        let closestDist = Infinity;
        let closestPoint = null;

        points.forEach(p => {
            const px = getX(p.x);
            const dist = Math.abs(px - mouseX);
            if (dist < closestDist) {
                closestDist = dist;
                closestPoint = p;
            }
        });

        if (closestPoint && closestDist < 50) {
            setHoverData(closestPoint);
        } else {
            setHoverData(null);
        }
    };

    const handleMouseLeave = () => {
        setHoverData(null);
    };

    const gradId = `gradient-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className="chart-wrapper">
            <svg
                ref={svgRef}
                width="100%"
                height="100%"
                viewBox={`0 0 ${width} ${height}`}
                className="market-chart"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ overflow: 'visible' }}
            >
                <defs>
                    <linearGradient id={gradId} x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={color} stopOpacity="0.0" />
                    </linearGradient>
                </defs>

                <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#333" strokeWidth="1" />
                <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#333" strokeWidth="1" />

                {points.map((p, i) => (
                    i % 10 === 0 && (
                        <text
                            key={i}
                            x={getX(p.x)}
                            y={height - 20}
                            fill="#666"
                            fontSize="10"
                            textAnchor="middle"
                        >
                            {p.time}
                        </text>
                    )
                ))}

                {[minY, (minY + maxY) / 2, maxY].map((val, i) => (
                    <text
                        key={i}
                        x={padding - 10}
                        y={getY(val) + 4}
                        fill="#666"
                        fontSize="10"
                        textAnchor="end"
                    >
                        {val.toFixed(2)}
                    </text>
                ))}

                <path
                    d={`${pathD} L ${getX(points[points.length - 1].x)},${height - padding} L ${getX(points[0].x)},${height - padding} Z`}
                    fill={`url(#${gradId})`}
                    stroke="none"
                />
                <path
                    d={pathD}
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {hoverData && (
                    <g>
                        <line
                            x1={getX(hoverData.x)}
                            y1={padding}
                            x2={getX(hoverData.x)}
                            y2={height - padding}
                            stroke="#444"
                            strokeDasharray="4 4"
                        />
                        <circle cx={getX(hoverData.x)} cy={getY(hoverData.y)} r="4" fill={color} stroke="#fff" strokeWidth="2" />
                        <rect
                            x={getX(hoverData.x) - 40}
                            y={getY(hoverData.y) - 40}
                            width="80"
                            height="30"
                            fill="#222"
                            stroke="#444"
                            rx="4"
                        />
                        <text
                            x={getX(hoverData.x)}
                            y={getY(hoverData.y) - 20}
                            fill="#fff"
                            fontSize="11"
                            textAnchor="middle"
                            fontWeight="bold"
                        >
                            {hoverData.y.toFixed(2)}
                        </text>
                    </g>
                )}
            </svg>
        </div>
    );
};

export default SimpleChart;
