import { ToastContainer } from "react-toastify";
import { HomeProvider } from "./context/HomeContext";
import "./globals.css";
import { Montserrat } from 'next/font/google';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: "The Salon Company",
  description: "this is salon company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        <HomeProvider>
          {children}
        </HomeProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
