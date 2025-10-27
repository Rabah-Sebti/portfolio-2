// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HOST_URL } from "@/constants/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  // read route params

  return {
    title: {
      template: "%s | Rabah Sebti",
      default: "Rabah Sebti",
    },
    description: "Rabah Sebti Web Developer Portfolio",
    icons: {
      icon: "/images/profile.jpg",
    },
    openGraph: {
      title: "Rabah Sebti Web Developer Portfolio",
      description: "Rabah Sebti Web Developer Portfolio",
      url: HOST_URL,
      siteName: "Rabah Sebti Web Developer Portfolio",
      images: [
        {
          url: `${HOST_URL}/images/profile.jpg`, // Must be an absolute URL
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Rabah Sebti Web Developer Portfolio",
      description: "Rabah Sebti Web Developer Portfolio",

      images: [`${HOST_URL}/images/profile.jpg`], // Must be an absolute URL
    },

    alternates: {
      canonical: `${HOST_URL}`,
    },
  };
}

// export const metadata: Metadata = {
//   title: "Rabah Sebti",
//   description: "Rabah Sebti Web Developer Portfolio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
