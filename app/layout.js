import { ToastContainer } from "react-toastify";
import { SalonProvider } from "./context/SalonContext";
import "./globals.css";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: "The Salon Company | Hair • Beauty • Makeup • Nails",
  description:
    "The Salon Company in Noida offers expert hair, beauty, makeup, permanent makeup, nail extensions, facials, and lash treatments. Book your free consultation today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} scrollbar-thin scrollbar-thumb-custom scrollbar-track-gray-200`}
      >
        <SalonProvider>{children}</SalonProvider>
        <ToastContainer />
      </body>

    </html>
  );
}
