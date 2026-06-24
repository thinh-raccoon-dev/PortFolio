import type { Metadata } from "next";
import { Almarai, Instrument_Serif } from "next/font/google";
import AppProvider from "@/components/providers/AppProvider";
import "./globals.css";

const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lại Văn Thịnh — Frontend Developer",
  description:
    "Portfolio of Lại Văn Thịnh, a Frontend Developer crafting fast and beautiful web experiences.",
  openGraph: {
    title: "Lại Văn Thịnh — Frontend Developer",
    description: "Frontend Developer crafting fast, beautiful web experiences.",
    type: "website",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);var l=localStorage.getItem('portfolio-locale');if(l==='en'||l==='vi')document.documentElement.lang=l==='vi'?'vi':'en';}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${almarai.variable} ${instrumentSerif.variable} h-full`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
