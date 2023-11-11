import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "./components/AuthProvider";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Alchemist",
  description: "webshop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
        <NavBar/>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
