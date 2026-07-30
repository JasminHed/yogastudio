import { createContext, useContext, useState } from "react";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [membership, setMembership] = useState(null);

  const [authOpen, setAuthOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [pendingItem, setPendingItem] = useState(null);

  function login(name, email) {
    setUser({ name, email });
    setAuthOpen(false);
    if (pendingItem) setPaymentOpen(true);
  }

  function logout() {
    setUser(null);
    setPendingItem(null);
  }

  function isBooked(id) {
    return bookings.some((b) => b.id === id);
  }

  function cancelBooking(id) {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  }

  // Called from a "Boka"/"Köp" button on a class, treatment or membership plan.
  function requestBooking(item) {
    setPendingItem(item);
    if (!user) {
      setAuthOpen(true);
    } else {
      setPaymentOpen(true);
    }
  }

  // Called when the (fake) payment form is confirmed.
  function confirmPayment() {
    if (!pendingItem) return;
    if (pendingItem.kind === "membership") {
      setMembership(pendingItem.label);
    } else {
      setBookings((prev) => [...prev, pendingItem]);
    }
    setPaymentOpen(false);
    setPendingItem(null);
  }

  function closeAuth() {
    setAuthOpen(false);
    setPendingItem(null);
  }

  function closePayment() {
    setPaymentOpen(false);
    setPendingItem(null);
  }

  const value = {
    user,
    login,
    logout,
    bookings,
    isBooked,
    cancelBooking,
    membership,
    authOpen,
    paymentOpen,
    pendingItem,
    requestBooking,
    confirmPayment,
    closeAuth,
    closePayment,
  };

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  return useContext(BookingContext);
}
