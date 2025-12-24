export const metadata = {
  title: "Red River HVAC Services",
  description: "Residential and Commercial HVAC Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


