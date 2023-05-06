import './globals.css';
import Navbar from '../components/navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=' bg-color4'>
      <Navbar />
        {children}
      </body>
    </html>
  );
}