import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "NextJs Demo",
  description: "First NextJs Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
