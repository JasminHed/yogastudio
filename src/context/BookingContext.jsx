import { createContext, useContext, useState } from "react";
import { scrollToId } from "../lib/scrollTo.js";

const BookingContext = createContext(null);

function capitalizeName(name) {
  return name
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function BookingProvider({ children }) {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [membership, setMembership] = useState(null);
  const [dropInCredits, setDropInCredits] = useState(0);

  const [accountOpen, setAccountOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [pendingItem, setPendingItem] = useState(null);

  function hasAccess() {
    return Boolean(membership) || dropInCredits > 0;
  }

  function isBooked(id) {
    return bookings.some((b) => b.id === id);
  }

  function cancelBooking(id) {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  }

  function bookClassNow(item) {
    setBookings((prev) => [...prev, item]);
    if (!membership) {
      setDropInCredits((c) => Math.max(0, c - 1));
    }
    setAccountOpen(true);
  }

  // Entry point for both "Boka" (class) and "Köp" (plan) buttons.
  function requestBooking(item) {
    if (!user) {
      setPendingItem(item);
      setAuthOpen(true);
      return;
    }
    proceedWithItem(item);
  }

  function proceedWithItem(item) {
    if (!item) {
      setAccountOpen(true);
      return;
    }
    if (item.kind === "class") {
      if (hasAccess()) {
        bookClassNow(item);
      } else {
        setAccountOpen(false);
        scrollToId("medlemskap");
      }
    } else {
      // Membership or drop-in purchase: always goes through the payment step.
      setPendingItem(item);
      setPaymentOpen(true);
    }
  }

  function login(name, email) {
    setUser({ name: capitalizeName(name), email });
    setAuthOpen(false);
    const item = pendingItem;
    setPendingItem(null);
    proceedWithItem(item);
  }

  function logout() {
    setUser(null);
    setPendingItem(null);
    setAccountOpen(false);
    setBookings([]);
    setMembership(null);
    setDropInCredits(0);
  }

  // Called when the (fake) payment form for a plan purchase is confirmed.
  function confirmPayment() {
    if (!pendingItem) return;
    if (pendingItem.kind === "membership") {
      setMembership(pendingItem.label);
    } else if (pendingItem.kind === "dropin") {
      setDropInCredits((c) => c + 1);
    }
    setPaymentOpen(false);
    setPendingItem(null);
    setAccountOpen(true);
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
    dropInCredits,
    hasAccess,
    accountOpen,
    setAccountOpen,
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
