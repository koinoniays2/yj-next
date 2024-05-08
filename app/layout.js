import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 헤더 */}
        <header className="w-full border-b">
          <div className="w-full max-w-screen-xl h-20 mx-auto flex justify-between items-center">
            {/* 로고 */}
            <div>
              <h1 className="text-3xl font-bold cursor-pointer"><Link href="/">LOGO</Link></h1>
            </div>
            {/* 메뉴 */}
            <nav className="flex gap-x-4">
              <div>과정안내</div>
              <div>공지사항</div>
              <div>토론방</div>
            </nav>
            {/* 로그인 */}
            <nav className="flex gap-x-4">
            <Link href="/join"><Button variant="outline" size="sm">회원가입</Button></Link>
            <Link href="/login"><Button size="sm">로그인</Button></Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
