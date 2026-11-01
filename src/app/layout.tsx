
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { profile, contact } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Replace with your actual deployed portfolio URL
const siteUrl = "https://your-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${profile.name} | Full-Stack Developer`,
    template: `%s | ${profile.name}`,
  },

  description:
    "I'm an MCA student and aspiring software developer focused on full-stack web development, Java, backend engineering, and building practical software applications.",

  keywords: [
    profile.name,
    "Full Stack Developer",
    "Software Developer",
    "MERN Stack Developer",
    "Java Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Python",
    "Web Development",
  ],

  authors: [{ name: profile.name, url: contact.linkedin }],
  creator: profile.name,

  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} | Full-Stack Developer`,
    description:
      "Explore my software development projects, technical skills, and professional journey.",
    siteName: `${profile.name} Portfolio`,
  },

  twitter: {
    card: "summary_medium_image",
    title: `${profile.name} | Full-Stack Developer`,
    description:
      "Full-stack development, Java, and software engineering projects.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
