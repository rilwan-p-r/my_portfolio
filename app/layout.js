import "./globals.css";

export const metadata = {
  title: "rilwan's-portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased leading-8 overflow-x-hidden dark:bg-darkTheme
      dark:text-white">
        {children}
      </body>
    </html>
  );
}
