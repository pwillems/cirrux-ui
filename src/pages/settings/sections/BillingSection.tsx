import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { CreditCard, FileText } from "lucide-react";

const invoices = [
  { id: "i1", date: "Mar 1, 2026", amount: "$0.00", status: "Free plan" },
];

export function BillingSection() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900">
        Billing
      </h1>

      {/* Current plan */}
      <div className="rounded-lg shadow-card bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-md font-semibold tracking-[0.01em] text-gray-900">
              Current plan
            </h2>
            <p className="text-sm text-gray-400">
              You are on the Free plan
            </p>
          </div>
          <Badge>Free</Badge>
        </div>
        <div className="rounded-md bg-gray-50 px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base font-medium text-gray-900">
                1 mailbox included
              </p>
              <p className="text-sm text-gray-400">
                Upgrade for more mailboxes, custom domains, and priority support
              </p>
            </div>
            <Button variant="primary" size="sm">
              Upgrade
            </Button>
          </div>
        </div>
      </div>

      {/* Payment method */}
      <div className="mt-6 rounded-lg shadow-card bg-white p-6">
        <div className="mb-4 flex items-center gap-2">
          <CreditCard size={16} className="text-gray-400" />
          <h2 className="text-md font-semibold tracking-[0.01em] text-gray-900">
            Payment method
          </h2>
        </div>
        <p className="mb-4 text-sm text-gray-400">
          No payment method on file.
        </p>
        <Button variant="secondary" size="sm">
          Add payment method
        </Button>
      </div>

      {/* Invoices */}
      <div className="mt-6">
        <h2 className="mb-4 text-md font-semibold tracking-[0.01em] text-gray-900">
          Invoices
        </h2>
        <div className="flex flex-col gap-2">
          {invoices.map((inv) => (
            <div
              key={inv.id}
              className="flex items-center justify-between rounded-lg shadow-card bg-white px-5 py-3"
            >
              <div className="flex items-center gap-3">
                <FileText size={16} className="text-gray-400" />
                <div>
                  <p className="text-base text-gray-900">{inv.date}</p>
                  <p className="text-sm text-gray-400">
                    {inv.amount} — {inv.status}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                Download
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
