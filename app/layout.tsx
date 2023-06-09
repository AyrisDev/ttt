"use client";

import cn from "classnames";
import "@/styles/globals.css";
import "@/styles/scrollbar.css";

import Sidebar from "@/components/navigation/sidebar";
import Header from "@/Components/navigation/header";

import { GrazProvider } from "@ayris-dev/cosmoshooks";
import { vinceTestnet } from "@/lib//chains/vinceChain";

export default function RootLayout({
  children,
  contentClassName,
}: {
  children: React.ReactNode;
  contentClassName?: string;
}) {
  return (
    <html lang="en">
      <body className="xl:pl-72 2xl:pl-80">
        <GrazProvider
          grazOptions={{
            defaultChain: vinceTestnet,
          }}>
          <Header />
          <Sidebar className="hidden xl:block" />
          <main
            className={cn(
              "min-h-[100vh] px-4 pt-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 xl:pb-24 3xl:px-10 3xl:pt-0.5",
              contentClassName
            )}>
            {children}
          </main>
        </GrazProvider>
      </body>
    </html>
  );
}
