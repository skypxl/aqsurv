import './globals.css';

export const metadata = {
  title: 'AQSURV - Enterprise Surveying Solutions',
  description: 'Advanced aerial surveying platform powered by DJI enterprise technology',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
