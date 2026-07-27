import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iron Forge Fitness | Premium Dark Luxury Gym & Fitness Club",
  description: "Forge your strongest self at Iron Forge Fitness. Experience a world-class elite luxury fitness club featuring premium equipment, personalized expert training, CrossFit, yoga, and state-of-the-art wellness amenities.",
  keywords: ["luxury gym", "premium fitness center", "personal training", "CrossFit", "yoga class", "strength training", "body transformation", "exclusive gym membership"],
  authors: [{ name: "Iron Forge Fitness" }],
  openGraph: {
    title: "Iron Forge Fitness | Premium Dark Luxury Gym & Fitness Club",
    description: "Forge your strongest self at Iron Forge Fitness. Experience a world-class elite luxury fitness club featuring premium equipment, personalized expert training, and state-of-the-art wellness amenities.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-matte-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}
