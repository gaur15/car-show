
import { Footer, NavBar } from '@/components';
import "./globals.css";


export const metadata = {
  title: "Car Hub",
  description: "Discover best cars in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar/>
        {children}
        <Footer />
        </body>
    </html>
  );
}
