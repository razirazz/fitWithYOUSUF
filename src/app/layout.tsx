import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Oxygen } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contextprovider/themeprovider";

const fontTitle = Cormorant_Garamond({
  variable: "--font-title",
  weight: ["300", "400", "500", "600", "700"],
  style: ["italic", "normal"],
})

const fontBody = Oxygen({
  variable: "--font-body",
  weight: ["300", "400", "700"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "fitwithYousuf",
  description: "Transform Your Body, Transform Your Life with Yousuf Ali. Welcome to official website of Yousuf Ali, a Level 4 Certified Personal Trainer with over 8 years of experience",
  authors: [{
    name: "Razeena CP"
  }],
  creator: "Razeena CP",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  }
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: dark)', color: 'var(--background)'},
        { media: '(prefers-color-scheme: light)', color: 'var(--background)'},
    ],
    width: 'device-width',
    initialScale: 1.0,
    maximumScale: 1.0,
    colorScheme: 'light dark',  
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontBody.variable} ${fontTitle.variable} prefers-color-scheme: dark`}
      >
      <body>
        <ThemeProvider>

          {children}

        </ThemeProvider>
      </body>
    </html>
  );
}
