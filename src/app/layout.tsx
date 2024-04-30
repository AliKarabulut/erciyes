import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/storyblok-provider";
import Script from "next/script";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erciyes Anadolu Demo",
  description: "Stroyblok Erciyes Anadolu Demo",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://erciyes-anadolu-demo.vercel.app/",
    siteName: "Erciyes Anadolu Demo",
    images: [
      {
        url: "image-url",
        width: 1200,
        height: 630,
        alt: "Description of the image",
      },
    ],
  },
};

storyblokInit({
  accessToken: "rkUjJeE1nvv8JZ3LEeSJxAtt",
  use: [apiPlugin],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
          <Script src="/js-files/vendors.js"  />
          <Script src="/js-files/jquery.min.js"  />
          <Script src="/js-files/magnific.min.js"  />
          <Script src="/js-files/main.js" />
        </body>
      </html>
    </StoryblokProvider>
  );
}
