module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/WorldMap.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-simple-maps/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tooltip$2f$dist$2f$react$2d$tooltip$2e$min$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-tooltip/dist/react-tooltip.min.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const WorldMap = ({ data })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "map-container glass-panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComposableMap"], {
                projection: "geoMercator",
                projectionConfig: {
                    scale: 120
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZoomableGroup"], {
                    center: [
                        0,
                        20
                    ],
                    zoom: 1,
                    minZoom: 1,
                    maxZoom: 4,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Geographies"], {
                            geography: geoUrl,
                            children: ({ geographies })=>geographies.map((geo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Geography"], {
                                        geography: geo,
                                        fill: "#2a2a2a",
                                        stroke: "#404040",
                                        strokeWidth: 0.5,
                                        style: {
                                            default: {
                                                outline: "none"
                                            },
                                            hover: {
                                                fill: "#333333",
                                                outline: "none"
                                            },
                                            pressed: {
                                                outline: "none"
                                            }
                                        }
                                    }, geo.rsmKey, false, {
                                        fileName: "[project]/components/WorldMap.js",
                                        lineNumber: 23,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/WorldMap.js",
                            lineNumber: 20,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        data.map((idx)=>{
                            // Logic for coloring
                            const state = idx.marketState || 'CLOSED'; // Default to closed if unknown
                            const isClosed = state === 'CLOSED' || state === 'POST' || state === 'PRE' || state === 'POSTPOST';
                            const isPositive = (idx.changePercent || 0) >= 0;
                            // User Rule: "Grey if closed and then if open and positive then green, red for negative"
                            let color = '#737373'; // Neutral Grey (Default/Closed)
                            if (!isClosed) {
                                color = isPositive ? '#22c55e' : '#ef4444'; // Green : Red
                            }
                            // Tooltip Content
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
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Marker"], {
                                coordinates: [
                                    idx.long,
                                    idx.lat
                                ],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    "data-tooltip-id": "my-tooltip",
                                    "data-tooltip-html": toolTipContent,
                                    "data-tooltip-place": "top",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            r: 5,
                                            fill: color,
                                            stroke: "#fff",
                                            strokeWidth: 0.5,
                                            style: {
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease'
                                            },
                                            className: "marker-circle"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WorldMap.js",
                                            lineNumber: 72,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            textAnchor: "middle",
                                            y: 1.5,
                                            style: {
                                                fontFamily: "system-ui",
                                                fill: "#fff",
                                                fontSize: "3px",
                                                fontWeight: "bold",
                                                pointerEvents: "none"
                                            },
                                            children: [
                                                Math.abs(idx.changePercent || 0).toFixed(1),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WorldMap.js",
                                            lineNumber: 80,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WorldMap.js",
                                    lineNumber: 67,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, idx.symbol, false, {
                                fileName: "[project]/components/WorldMap.js",
                                lineNumber: 66,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WorldMap.js",
                    lineNumber: 19,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/WorldMap.js",
                lineNumber: 18,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isMounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tooltip$2f$dist$2f$react$2d$tooltip$2e$min$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                id: "my-tooltip",
                style: {
                    backgroundColor: "#262626",
                    color: "#fff",
                    borderRadius: "8px"
                }
            }, void 0, false, {
                fileName: "[project]/components/WorldMap.js",
                lineNumber: 99,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/WorldMap.js",
        lineNumber: 17,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = WorldMap;
}),
"[project]/components/SimpleChart.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const SimpleChart = ({ data, color, isPositive })=>{
    const [hoverData, setHoverData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!data || data.length === 0) {
            return Array.from({
                length: 40
            }, (_, i)=>({
                    x: i,
                    y: 100 + Math.random() * 20 - 10 + (isPositive ? i * 0.5 : -i * 0.5),
                    time: `${9 + Math.floor(i / 6)}:${i % 6 * 10 || '00'}`
                }));
        }
        return data;
    }, [
        data,
        isPositive
    ]);
    const width = 600;
    const height = 250;
    const padding = 40;
    const minX = Math.min(...points.map((p)=>p.x));
    const maxX = Math.max(...points.map((p)=>p.x));
    const minY = Math.min(...points.map((p)=>p.y));
    const maxY = Math.max(...points.map((p)=>p.y));
    const getX = (val)=>(val - minX) / (maxX - minX) * (width - 2 * padding) + padding;
    const getY = (val)=>height - padding - (val - minY) / (maxY - minY) * (height - 2 * padding);
    const pathD = points.map((p, i)=>`${i === 0 ? 'M' : 'L'} ${getX(p.x)},${getY(p.y)}`).join(' ');
    const handleMouseMove = (e)=>{
        if (!svgRef.current) return;
        const rect = svgRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        let closestDist = Infinity;
        let closestPoint = null;
        points.forEach((p)=>{
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
    const handleMouseLeave = ()=>{
        setHoverData(null);
    };
    const gradId = `gradient-${Math.random().toString(36).substr(2, 9)}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "chart-wrapper",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ref: svgRef,
            width: "100%",
            height: "100%",
            viewBox: `0 0 ${width} ${height}`,
            className: "market-chart",
            onMouseMove: handleMouseMove,
            onMouseLeave: handleMouseLeave,
            style: {
                overflow: 'visible'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: gradId,
                        x1: "0",
                        x2: "0",
                        y1: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: color,
                                stopOpacity: "0.3"
                            }, void 0, false, {
                                fileName: "[project]/components/SimpleChart.js",
                                lineNumber: 80,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: color,
                                stopOpacity: "0.0"
                            }, void 0, false, {
                                fileName: "[project]/components/SimpleChart.js",
                                lineNumber: 81,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SimpleChart.js",
                        lineNumber: 79,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/SimpleChart.js",
                    lineNumber: 78,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: padding,
                    y1: height - padding,
                    x2: width - padding,
                    y2: height - padding,
                    stroke: "#333",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/components/SimpleChart.js",
                    lineNumber: 85,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: padding,
                    y1: padding,
                    x2: padding,
                    y2: height - padding,
                    stroke: "#333",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/components/SimpleChart.js",
                    lineNumber: 86,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                points.map((p, i)=>i % 10 === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: getX(p.x),
                        y: height - 20,
                        fill: "#666",
                        fontSize: "10",
                        textAnchor: "middle",
                        children: p.time
                    }, i, false, {
                        fileName: "[project]/components/SimpleChart.js",
                        lineNumber: 90,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))),
                [
                    minY,
                    (minY + maxY) / 2,
                    maxY
                ].map((val, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: padding - 10,
                        y: getY(val) + 4,
                        fill: "#666",
                        fontSize: "10",
                        textAnchor: "end",
                        children: val.toFixed(2)
                    }, i, false, {
                        fileName: "[project]/components/SimpleChart.js",
                        lineNumber: 104,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `${pathD} L ${getX(points[points.length - 1].x)},${height - padding} L ${getX(points[0].x)},${height - padding} Z`,
                    fill: `url(#${gradId})`,
                    stroke: "none"
                }, void 0, false, {
                    fileName: "[project]/components/SimpleChart.js",
                    lineNumber: 116,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: pathD,
                    fill: "none",
                    stroke: color,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/SimpleChart.js",
                    lineNumber: 121,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                hoverData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: getX(hoverData.x),
                            y1: padding,
                            x2: getX(hoverData.x),
                            y2: height - padding,
                            stroke: "#444",
                            strokeDasharray: "4 4"
                        }, void 0, false, {
                            fileName: "[project]/components/SimpleChart.js",
                            lineNumber: 132,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: getX(hoverData.x),
                            cy: getY(hoverData.y),
                            r: "4",
                            fill: color,
                            stroke: "#fff",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/components/SimpleChart.js",
                            lineNumber: 140,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: getX(hoverData.x) - 40,
                            y: getY(hoverData.y) - 40,
                            width: "80",
                            height: "30",
                            fill: "#222",
                            stroke: "#444",
                            rx: "4"
                        }, void 0, false, {
                            fileName: "[project]/components/SimpleChart.js",
                            lineNumber: 141,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: getX(hoverData.x),
                            y: getY(hoverData.y) - 20,
                            fill: "#fff",
                            fontSize: "11",
                            textAnchor: "middle",
                            fontWeight: "bold",
                            children: hoverData.y.toFixed(2)
                        }, void 0, false, {
                            fileName: "[project]/components/SimpleChart.js",
                            lineNumber: 150,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SimpleChart.js",
                    lineNumber: 131,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/SimpleChart.js",
            lineNumber: 68,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/SimpleChart.js",
        lineNumber: 67,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SimpleChart;
}),
"[project]/components/IndicesTable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/components/IndicesTable.js'\n\nExpected ',', got 'onClick'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WorldMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WorldMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$IndicesTable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/IndicesTable.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Home() {
    const [marketData, setMarketData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchData() {
            try {
                const res = await fetch('/api/market-data');
                const data = await res.json();
                if (data.indices) {
                    setMarketData(data.indices);
                }
            } catch (error) {
                console.error("Failed to fetch data", error);
            } finally{
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "main-content",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "hero-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "title-gradient",
                        children: "World Markets"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "subtitle",
                        children: "Real-time global market indices visualization"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "loading-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spinner"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 37,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Loading Market Data..."
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 38,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 36,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "map-section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WorldMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            data: marketData
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 43,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 42,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "table-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-title",
                                children: "Market Data"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 47,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$IndicesTable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                data: marketData
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 48,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 46,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 29,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0707139c._.js.map