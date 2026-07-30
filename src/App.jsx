import { BookingProvider } from "./context/BookingContext.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Classes from "./components/Classes.jsx";
import Schedule from "./components/Schedule.jsx";
import Pricing from "./components/Pricing.jsx";
import Retreat from "./components/Retreat.jsx";
import Footer from "./components/Footer.jsx";
import AuthModal from "./components/AuthModal.jsx";
import PaymentModal from "./components/PaymentModal.jsx";
import DemoNotice from "./components/DemoNotice.jsx";

export default function App() {
  return (
    <BookingProvider>
      <a
        href="#main"
        className="absolute left-3 top-3 z-[100] -translate-y-20 bg-ink px-5 py-3 text-white transition-transform focus:translate-y-0"
      >
        Hoppa till innehåll
      </a>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <Classes />
        <Pricing />
        <Schedule />
        <Retreat />
      </main>

      <Footer />

      <AuthModal />
      <PaymentModal />
      <DemoNotice />
    </BookingProvider>
  );
}
