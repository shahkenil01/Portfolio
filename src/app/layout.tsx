import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shah Kenil | Aspiring DevOps Engineer & Full Stack Developer",
  description: "Developer Portfolio of Shah Kenil - Aspiring DevOps Engineer and Full Stack Developer specialized in Linux, Docker, Git, AWS, CI/CD, React, Next.js, Node.js.",
  keywords: ["Shah Kenil", "DevOps Engineer", "Full Stack Developer", "Portfolio", "Ahmedabad", "Docker", "AWS", "CI/CD", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
