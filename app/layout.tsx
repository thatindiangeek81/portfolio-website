import type { Metadata } from "next";
import { Outfit} from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const outfit=Outfit({
  subsets:["latin"],
});

export const metadata: Metadata = {
  title: "Aryan Gupta - Portfolio",
  description: "Full-stack developer & Computer Engineering student. Building modern web applications with React, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${outfit.className}  antialiased`}
      >
        <Header/>
        {children}
         <Footer/>
      </body>
    </html>
  );
}
