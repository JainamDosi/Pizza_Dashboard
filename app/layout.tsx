import { ReactNode } from "react";
import "./globals.css";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Header from "@/components/Header";




export const metadata = {
  title: "Pizza Dashboard",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className="bg-[#141414]">
        {session && <Header user={session.user} />}
        <main >{children}</main>
      </body>
    </html>
  );
}
