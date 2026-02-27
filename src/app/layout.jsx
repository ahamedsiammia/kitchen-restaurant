import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import CartProvider from "@/Context/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400","500","700","800"],
  subsets:["latin"]

})

export const metadata = {
  title:{
    default : "Kitchen-Restaurant",
    template: "%s | Kitchen-Restaurant"
  },
  description: "Best FastFood in Mymensingh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased max-w-7xl mx-auto`} 
      >
        <Header></Header>
        <main className="py-4">
          <CartProvider>{children}</CartProvider>
          </main>
      </body>
    </html>
  );
}
