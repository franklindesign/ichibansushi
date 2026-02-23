import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import IchibanHeader from "@/app/components/ichibanheader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ichiban Sushi & Bar",
  description: "Ichiban Sushi & Bar | Santa Clarita Valley",
  keywords:
    "Ichiban Sushi, Ichiban Sushi & Bar, Sushi Santa Clarita, Sushi Bar, Ichiban scv, ichiban sushi yelp, ichiban sushi grubhub, ichiban sushi ubereats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="sticky top-0 z-50">
          <IchibanHeader />
        </div>
        <div>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </div>
        <footer>
          <div className="flex justify-center items-center p-5">
            <p>© {new Date().getFullYear()} Ichiban Sushi & Bar, Inc.</p> <p>All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
