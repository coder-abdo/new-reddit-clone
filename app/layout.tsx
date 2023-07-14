import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";

const plexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Reddit - Dive into anything",
  description: "The famous Reddit Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plexSans.className}>
        <Navbar />
        <div className="container">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
