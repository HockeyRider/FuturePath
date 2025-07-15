import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pathfinder Teens - Discover Your Future',
  description: 'Career discovery app for teenagers to explore college majors, careers, and opportunities',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}