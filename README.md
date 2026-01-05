# World Markets Map

A premium, interactive dashboard visualizing global stock market indices in real-time. Built with Next.js and React.

## Features

- **Interactive World Map**: Visual representation of global markets with color-coded status indicators.
    - **Green**: Market Open & Positive
    - **Red**: Market Open & Negative
    - **Grey**: Market Closed
- **Real-Time Data**: Fetches live data using the Yahoo Finance API.
- **Sortable Data Table**: A detailed list of global indices, sortable by region, price, return, and status.
- **Interactive Charts**: Expandable table rows featuring simulated intraday performance charts with hover analytics.
- **Premium UI/UX**: Dark mode aesthetic with glassmorphism effects, smooth animations, and responsive design.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: Vanilla CSS (Variables, Flexbox/Grid, Animations)
- **Data**: `yahoo-finance2`
- **Visualization**: `react-simple-maps`, `d3-scale`
- **Tooling**: `npm`

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/heislk/World-Markets
   cd world-markets
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app`: Next.js app router structure.
  - `/api/market-data`: Backend API route for fetching indices.
  - `page.js`: Main dashboard controller.
  - `globals.css`: Global styles and theming.
- `/components`: Reusable UI components.
  - `WorldMap.js`: Interactive map visualization.
  - `IndicesTable.js`: Sortable data table with expansion logic.
  - `SimpleChart.js`: SVG-based line chart component.

## Data Note

The application attempts to fetch live data. If the API rate limit is exceeded or data is unavailable, it gracefully handles the error and provides fallback data for demonstration purposes.

## License

MIT
