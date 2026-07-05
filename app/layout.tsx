import './globals.css';
import { Poppins, IBM_Plex_Mono } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'cases r us',
  description: 'we are a small family run law firm that specialise in family court cases, navy and yellow branding, super professional, we want people to book us online',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${ibmPlexMono.variable}`}>
      <body className="bg-white text-[#111827] antialiased min-h-screen flex flex-col font-sans selection:bg-[#FECE14] selection:text-[#000000]">
        {children}
      </body>
    </html>
  );
}