import './globals.css';

export const metadata = {
    title: 'World Markets Map',
    description: 'Global indices visualization',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
