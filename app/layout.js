import "./globals.css"; 
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Arsalan | Portfolio",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          suppressHydrationWarning
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
