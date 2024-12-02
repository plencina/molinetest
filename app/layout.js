import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const fd = localFont({
  src: "./fonts/fd.ttf",
  variable: "--fd"
});
const ku = localFont({
  src: "./fonts/ku.ttf",
  variable: "--ku"
});
export const metadata = {
  title: "Dashboard",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${ku.variable} ${fd.variable} ${geistMono}`}>
        {children}
      </body>
    </html>
  );
}
