(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/WorldMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-simple-maps/dist/index.umd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tooltip$2f$dist$2f$react$2d$tooltip$2e$min$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-tooltip/dist/react-tooltip.min.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const WorldMap = ({ data })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "map-container glass-panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposableMap"], {
                projection: "geoMercator",
                projectionConfig: {
                    scale: 120
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZoomableGroup"], {
                    center: [
                        0,
                        20
                    ],
                    zoom: 1,
                    minZoom: 1,
                    maxZoom: 4,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Geographies"], {
                            geography: geoUrl,
                            children: ({ geographies })=>geographies.map((geo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Geography"], {
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
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                                coordinates: [
                                    idx.long,
                                    idx.lat
                                ],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    "data-tooltip-id": "my-tooltip",
                                    "data-tooltip-html": toolTipContent,
                                    "data-tooltip-place": "top",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tooltip$2f$dist$2f$react$2d$tooltip$2e$min$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                id: "my-tooltip",
                style: {
                    backgroundColor: "#242424",
                    color: "#e5e5e5",
                    border: "1px solid #404040",
                    borderRadius: "8px",
                    zIndex: 999
                }
            }, void 0, false, {
                fileName: "[project]/components/WorldMap.js",
                lineNumber: 99,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/WorldMap.js",
        lineNumber: 17,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = WorldMap;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(WorldMap);
var _c, _c1;
__turbopack_context__.k.register(_c, "WorldMap");
__turbopack_context__.k.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/IndicesTable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const IndicesTable = ({ data })=>{
    _s();
    const [sortConfig, setSortConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        key: 'name',
        direction: 'ascending'
    });
    const sortedData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "IndicesTable.useMemo[sortedData]": ()=>{
            let sortableItems = [
                ...data
            ];
            if (sortConfig !== null) {
                sortableItems.sort({
                    "IndicesTable.useMemo[sortedData]": (a, b)=>{
                        let aValue = a[sortConfig.key];
                        let bValue = b[sortConfig.key];
                        // Handle numbers
                        if (typeof aValue === 'number' && typeof bValue === 'number') {
                        // direct comparison
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
                    }
                }["IndicesTable.useMemo[sortedData]"]);
            }
            return sortableItems;
        }
    }["IndicesTable.useMemo[sortedData]"], [
        data,
        sortConfig
    ]);
    const requestSort = (key)=>{
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({
            key,
            direction
        });
    };
    const getSortIndicator = (key)=>{
        if (sortConfig.key !== key) return '↕';
        return sortConfig.direction === 'ascending' ? '▲' : '▼';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "table-container glass-panel",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "indices-table",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                onClick: ()=>requestSort('region'),
                                children: [
                                    "Region ",
                                    getSortIndicator('region')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/IndicesTable.js",
                                lineNumber: 53,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                onClick: ()=>requestSort('name'),
                                children: [
                                    "Index ",
                                    getSortIndicator('name')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/IndicesTable.js",
                                lineNumber: 54,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                onClick: ()=>requestSort('price'),
                                children: [
                                    "Price ",
                                    getSortIndicator('price')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/IndicesTable.js",
                                lineNumber: 55,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                onClick: ()=>requestSort('changePercent'),
                                children: [
                                    "% Return ",
                                    getSortIndicator('changePercent')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/IndicesTable.js",
                                lineNumber: 56,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                onClick: ()=>requestSort('changeAmount'),
                                children: [
                                    "$ Gain ",
                                    getSortIndicator('changeAmount')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/IndicesTable.js",
                                lineNumber: 57,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                onClick: ()=>requestSort('marketState'),
                                children: [
                                    "Status ",
                                    getSortIndicator('marketState')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/IndicesTable.js",
                                lineNumber: 58,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/IndicesTable.js",
                        lineNumber: 52,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/IndicesTable.js",
                    lineNumber: 51,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: sortedData.map((idx)=>{
                        const isPositive = (idx.changePercent || 0) >= 0;
                        const state = idx.marketState || 'CLOSED';
                        const isClosed = state === 'CLOSED' || state === 'POST' || state === 'PRE' || state === 'POSTPOST';
                        // Logic: Grey if closed. If open: Green (pos) / Red (neg)
                        const rowColorClass = isClosed ? 'text-grey' : isPositive ? 'text-green' : 'text-red';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    children: idx.region
                                }, void 0, false, {
                                    fileName: "[project]/components/IndicesTable.js",
                                    lineNumber: 72,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "font-bold",
                                    children: idx.name
                                }, void 0, false, {
                                    fileName: "[project]/components/IndicesTable.js",
                                    lineNumber: 73,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    children: idx.price?.toLocaleString()
                                }, void 0, false, {
                                    fileName: "[project]/components/IndicesTable.js",
                                    lineNumber: 74,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: rowColorClass,
                                    children: [
                                        idx.changePercent ? idx.changePercent.toFixed(2) : '0.00',
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/IndicesTable.js",
                                    lineNumber: 75,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: rowColorClass,
                                    children: idx.changeAmount ? idx.changeAmount.toFixed(2) : '0.00'
                                }, void 0, false, {
                                    fileName: "[project]/components/IndicesTable.js",
                                    lineNumber: 76,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: `status-badge ${rowColorClass}`,
                                    children: state
                                }, void 0, false, {
                                    fileName: "[project]/components/IndicesTable.js",
                                    lineNumber: 77,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, idx.symbol, true, {
                            fileName: "[project]/components/IndicesTable.js",
                            lineNumber: 71,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/components/IndicesTable.js",
                    lineNumber: 61,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/IndicesTable.js",
            lineNumber: 50,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/IndicesTable.js",
        lineNumber: 49,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(IndicesTable, "Eu41lVKsZACGji/TgiTRWpo1gaY=");
_c = IndicesTable;
const __TURBOPACK__default__export__ = IndicesTable;
var _c;
__turbopack_context__.k.register(_c, "IndicesTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WorldMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WorldMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$IndicesTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/IndicesTable.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Home() {
    _s();
    const [marketData, setMarketData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
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
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "main-content",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "hero-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "title-gradient",
                        children: "World Markets"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "loading-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spinner"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 37,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "map-section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WorldMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "table-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-title",
                                children: "Market Data"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 47,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$IndicesTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(Home, "O19/Fo4pfVRYZ8Vsr86dJB0FQ7o=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_dac62b78._.js.map