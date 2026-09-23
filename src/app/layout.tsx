import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AURA Atelier Los Angeles | Bespoke Balayage & Luxury Hair Extensions in West Hollywood',
  description: 'Premier West Hollywood hair salon specializing in sun-kissed balayage, damage-free invisible hair extensions, precision cuts, and caviar gloss treatments. Book your transformation today.',
  keywords: ['Hair Salon Los Angeles', 'Balayage Beverly Hills', 'Hair Extensions West Hollywood', 'Luxury Hair Salon LA', 'Elena Rostova Hair'],
  openGraph: {
    title: 'AURA Atelier Los Angeles | Luxury Hair Salon',
    description: 'Bespoke Balayage, Invisible Extensions & Master Haircare in West Hollywood.',
    images: ['https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1200'],
  },
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
