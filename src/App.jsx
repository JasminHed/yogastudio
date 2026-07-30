import { BookingProvider } from "./context/BookingContext.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Classes from "./components/Classes.jsx";
import Schedule from "./components/Schedule.jsx";
import Pricing from "./components/Pricing.jsx";
import Treatments from "./components/Treatments.jsx";
import MyBookings from "./components/MyBookings.jsx";
import Footer from "./components/Footer.jsx";
import AuthModal from "./components/AuthModal.jsx";
import PaymentModal from "./components/PaymentModal.jsx";

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
        <Schedule />
        <Pricing />
        <Treatments />
        <MyBookings />
      </main>

      <Footer />

      <AuthModal />
      <PaymentModal />
    </BookingProvider>
  );
}
