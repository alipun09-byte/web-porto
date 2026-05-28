import './globals.css';

export const metadata = {
  title: 'Nur Alip — Graphic Designer & Visual Strategist',
  description: 'Portfolio Nur Alip Cahya Firdaus — Graphic Designer, Digital Marketing, Visual Strategist.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
