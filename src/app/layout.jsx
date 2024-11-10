import NextTopLoader from "nextjs-toploader";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "AgrichainHub | %s",
  },
  description: "A platform where farmers and customers interact",
};
export default async function RootLayout({ children }) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <SessionProvider session={session}>
          <NextTopLoader color="green" />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
