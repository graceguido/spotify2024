import Header from "../components/regions/Header";
import Footer from "../components/regions/Footer";
import "../sass/global.scss";

export const metadata = {
  title: "IST 363 Spotify",
  description:
    "A marketing page for Spotify spotlighting the top 10 artists of 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
