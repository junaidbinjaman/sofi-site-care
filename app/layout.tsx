import '../styles/globals.css';
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import AppSidebar from '../components/layout/AppSidebar';

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans h-full bg-white dark:bg-gray-900", inter.className)}>
      <body className='h-full'>
        <AppSidebar>
          {children}
        </AppSidebar>
      </body>
    </html>
  );
}


