export type InvoiceScope = "full" | "outbound" | "return";

export interface InvoiceOptions {
  roundTrip: boolean;
  returnDate: string;
  scope: InvoiceScope;
  paid: number;
}

export interface Leg {
  label: string;
  date: string;
  amount: number;
  status: "Paid" | "Partly paid" | "Unpaid";
}

export interface InvoicePlan {
  total: number;
  paid: number;
  balance: number;
  legs: Leg[];
  /** Amount shown as "this invoice" (the selected leg, or the whole trip). */
  invoiceAmount: number;
  invoiceLabel: string;
}

const round = (n: number) => Math.round(n * 100) / 100;

export function buildInvoicePlan(total: number, pickupDate: string, o: InvoiceOptions): InvoicePlan {
  const paid = Math.min(total, Math.max(0, Number.isFinite(o.paid) ? o.paid : 0));
  const balance = round(total - paid);

  if (!o.roundTrip) {
    return {
      total, paid, balance,
      legs: [],
      invoiceAmount: total,
      invoiceLabel: "One-way trip",
    };
  }

  const half = round(total / 2);
  const legStatus = (already: number, amount: number): Leg["status"] =>
    already >= amount ? "Paid" : already > 0 ? "Partly paid" : "Unpaid";

  const legs: Leg[] = [
    { label: "Outbound trip", date: pickupDate, amount: half, status: legStatus(paid, half) },
    { label: "Return trip", date: o.returnDate, amount: round(total - half), status: legStatus(paid - half, total - half) },
  ];

  const invoiceAmount = o.scope === "outbound" ? half : o.scope === "return" ? round(total - half) : total;
  const invoiceLabel =
    o.scope === "outbound" ? "Outbound trip" : o.scope === "return" ? "Return trip" : "Round trip (full)";

  return { total, paid, balance, legs, invoiceAmount, invoiceLabel };
}
