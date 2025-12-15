// seatsData.js
// --------------------------------------------
// FINAL SEAT DATA (Nested owner structure)
// A–G rows, 10 seats each
// --------------------------------------------

const emptyOwner = {
  name: null,
  phone: null,
  plan: null,
  paymentStatus: null,
  startDate: null,
  expiryDate: null,
};

export const seatsData = [
  // ------------------ ROW A ------------------
  { id: "A1", status: "available", owner: { ...emptyOwner } },
  { id: "A2", status: "booked", owner: { name: "Rahul", phone: "9876543210", plan: "monthly", paymentStatus: "paid", startDate: "2025-01-01", expiryDate: "2025-02-01" } },
  { id: "A3", status: "available", owner: { ...emptyOwner } },
  { id: "A4", status: "available", owner: { ...emptyOwner } },
  { id: "A5", status: "booked", owner: { name: "Anita", phone: "9000011111", plan: "weekly", paymentStatus: "paid", startDate: "2025-01-05", expiryDate: "2025-01-12" } },
  { id: "A6", status: "available", owner: { ...emptyOwner } },
  { id: "A7", status: "available", owner: { ...emptyOwner } },
  { id: "A8", status: "booked", owner: { name: "Sonia", phone: "9333333333", plan: "daily", paymentStatus: "paid", startDate: "2025-01-18", expiryDate: "2025-01-18" } },
  { id: "A9", status: "available", owner: { ...emptyOwner } },
  { id: "A10", status: "available", owner: { ...emptyOwner } },

  // ------------------ ROW B ------------------
  { id: "B1", status: "booked", owner: { name: "You", phone: "9999999999", plan: "monthly", paymentStatus: "paid", startDate: "2025-01-10", expiryDate: "2025-02-10" } },
  { id: "B2", status: "booked", owner: { name: "Unknown", phone: "0000000000", plan: "daily", paymentStatus: "pending", startDate: "2025-01-15", expiryDate: "2025-01-15" } },
  { id: "B3", status: "available", owner: { ...emptyOwner } },
  { id: "B4", status: "available", owner: { ...emptyOwner } },
  { id: "B5", status: "booked", owner: { name: "Kiran", phone: "9111111111", plan: "monthly", paymentStatus: "paid", startDate: "2025-01-07", expiryDate: "2025-02-07" } },
  { id: "B6", status: "available", owner: { ...emptyOwner } },
  { id: "B7", status: "available", owner: { ...emptyOwner } },
  { id: "B8", status: "booked", owner: { name: "Meena", phone: "9222222222", plan: "daily", paymentStatus: "paid", startDate: "2025-01-20", expiryDate: "2025-01-20" } },
  { id: "B9", status: "available", owner: { ...emptyOwner } },
  { id: "B10", status: "available", owner: { ...emptyOwner } },

  // ------------------ ROW C ------------------
  { id: "C1", status: "available", owner: { ...emptyOwner } },
  { id: "C2", status: "booked", owner: { name: "Anita", phone: "8877665544", plan: "weekly", paymentStatus: "paid", startDate: "2025-01-20", expiryDate: "2025-01-27" } },
  { id: "C3", status: "available", owner: { ...emptyOwner } },
  { id: "C4", status: "available", owner: { ...emptyOwner } },
  { id: "C5", status: "booked", owner: { name: "Arjun", phone: "9333444455", plan: "monthly", paymentStatus: "paid", startDate: "2025-01-04", expiryDate: "2025-02-04" } },
  { id: "C6", status: "available", owner: { ...emptyOwner } },
  { id: "C7", status: "available", owner: { ...emptyOwner } },
  { id: "C8", status: "booked", owner: { name: "Divya", phone: "9444444444", plan: "weekly", paymentStatus: "paid", startDate: "2025-01-17", expiryDate: "2025-01-24" } },
  { id: "C9", status: "available", owner: { ...emptyOwner } },
  { id: "C10", status: "available", owner: { ...emptyOwner } },

  // ------------------ ROW D ------------------
  { id: "D1", status: "available", owner: { ...emptyOwner } },
  { id: "D2", status: "available", owner: { ...emptyOwner } },
  { id: "D3", status: "booked", owner: { name: "Vikram", phone: "7777777777", plan: "monthly", paymentStatus: "paid", startDate: "2025-01-05", expiryDate: "2025-02-05" } },
  { id: "D4", status: "available", owner: { ...emptyOwner } },
  { id: "D5", status: "booked", owner: { name: "Pooja", phone: "9888800000", plan: "weekly", paymentStatus: "pending", startDate: "2025-01-16", expiryDate: "2025-01-23" } },
  { id: "D6", status: "available", owner: { ...emptyOwner } },
  { id: "D7", status: "available", owner: { ...emptyOwner } },
  { id: "D8", status: "booked", owner: { name: "Suresh", phone: "9333333333", plan: "monthly", paymentStatus: "paid", startDate: "2025-01-03", expiryDate: "2025-02-03" } },
  { id: "D9", status: "available", owner: { ...emptyOwner } },
  { id: "D10", status: "available", owner: { ...emptyOwner } },

  // ------------------ ROW E ------------------
  { id: "E1", status: "booked", owner: { name: "Sonia", phone: "9898989898", plan: "monthly", paymentStatus: "paid", startDate: "2025-01-03", expiryDate: "2025-02-03" } },
  { id: "E2", status: "available", owner: { ...emptyOwner } },
  { id: "E3", status: "available", owner: { ...emptyOwner } },
  { id: "E4", status: "booked", owner: { name: "Karthik", phone: "9000001234", plan: "weekly", paymentStatus: "paid", startDate: "2025-01-11", expiryDate: "2025-01-18" } },
  { id: "E5", status: "available", owner: { ...emptyOwner } },
  { id: "E6", status: "available", owner: { ...emptyOwner } },
  { id: "E7", status: "booked", owner: { name: "Lavanya", phone: "9444000000", plan: "monthly", paymentStatus: "paid", startDate: "2025-01-07", expiryDate: "2025-02-07" } },
  { id: "E8", status: "available", owner: { ...emptyOwner } },
  { id: "E9", status: "available", owner: { ...emptyOwner } },
  { id: "E10", status: "available", owner: { ...emptyOwner } },

  // ------------------ ROW F ------------------
  { id: "F1", status: "available", owner: { ...emptyOwner } },
  { id: "F2", status: "booked", owner: { name: "Amit", phone: "9666666666", plan: "weekly", paymentStatus: "pending", startDate: "2025-01-12", expiryDate: "2025-01-19" } },
  { id: "F3", status: "available", owner: { ...emptyOwner } },
  { id: "F4", status: "available", owner: { ...emptyOwner } },
  { id: "F5", status: "booked", owner: { name: "Nikhil", phone: "9000099999", plan: "monthly", paymentStatus: "paid", startDate: "2025-01-09", expiryDate: "2025-02-09" } },
  { id: "F6", status: "available", owner: { ...emptyOwner } },
  { id: "F7", status: "available", owner: { ...emptyOwner } },
  { id: "F8", status: "booked", owner: { name: "Swati", phone: "9555512345", plan: "daily", paymentStatus: "paid", startDate: "2025-01-22", expiryDate: "2025-01-22" } },
  { id: "F9", status: "available", owner: { ...emptyOwner } },
  { id: "F10", status: "available", owner: { ...emptyOwner } },

  // ------------------ ROW G ------------------
  { id: "G1", status: "available", owner: { ...emptyOwner } },
  { id: "G2", status: "available", owner: { ...emptyOwner } },
  { id: "G3", status: "booked", owner: { name: "Neha", phone: "9123456789", plan: "monthly", paymentStatus: "paid", startDate: "2025-01-08", expiryDate: "2025-02-08" } },
  { id: "G4", status: "booked", owner: { name: "Naveen", phone: "9011223344", plan: "monthly", paymentStatus: "paid", startDate: "2025-01-08", expiryDate: "2025-02-08" } },
  { id: "G5", status: "available", owner: { ...emptyOwner } },
  { id: "G6", status: "available", owner: { ...emptyOwner } },
  { id: "G7", status: "booked", owner: { name: "Harsha", phone: "9888999911", plan: "weekly", paymentStatus: "paid", startDate: "2025-01-13", expiryDate: "2025-01-20" } },
  { id: "G8", status: "available", owner: { ...emptyOwner } },
  { id: "G9", status: "available", owner: { ...emptyOwner } },
  { id: "G10", status: "available", owner: { ...emptyOwner } },
];
