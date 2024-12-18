
import Header from "@/components/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  title: 'Bruno Henrique Scharf Silva',
  description: 'site de volei do Bruno',
  charset: 'Utf-8',
  author: 'Bruno Henrique',
  keywords:'html, CSS, JavaScrips,',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
