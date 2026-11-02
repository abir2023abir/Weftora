import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IntroProvider } from "@/components/Intro";
import { CookieBanner, ScrollProgress, SmoothScroll } from "@/components/Chrome";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <IntroProvider>
      <SmoothScroll />
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
      <CookieBanner />
    </IntroProvider>
  );
}
