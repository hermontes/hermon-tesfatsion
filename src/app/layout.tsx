import type { Metadata } from "next";
import { Header } from "../components/header"
import { ThemeProvider } from "../components/theme-provider"
import { Toaster } from "../components/ui/sonner"

import "./globals.css";

export const metadata: Metadata = {
  title: "Hermon Tesfatsion | Full Stack Software Engineer",
  description:
    "Personal portfolio of Hermon Tesfatsion, a Full Stack Software Engineer specializing in responsive web applications and custom integrations.",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased"
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
       
          <Header />
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
