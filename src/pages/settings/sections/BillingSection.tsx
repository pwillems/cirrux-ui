import { Button } from "../../../components/atoms";
import { Badge } from "../../../components/atoms";
import { CardSection } from "../../../components/organisms/CardSection";
import { PageTitle } from "../../../components/atoms/PageTitle";
import { ListItem } from "../../../components/molecules/ListItem";
import { CreditCard, FileText } from "lucide-react";

const invoices = [
  { id: "i1", date: "Mar 1, 2026", amount: "$0.00", status: "Free plan" },
];

export function BillingSection() {
  return (
    <div>
      <PageTitle>Billing</PageTitle>

      <div className="mt-6 flex flex-col gap-6">
        {/* Current plan */}
        <CardSection>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-md font-semibold tracking-[0.01em] text-gray-900">
                Current plan
              </h2>
              <p className="text-sm text-gray-400">You are on the Free plan</p>
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
        </CardSection>

        {/* Payment method */}
        <CardSection header={{ icon: <CreditCard size={16} />, title: "Payment method" }}>
          <p className="mb-4 text-sm text-gray-400">No payment method on file.</p>
          <Button variant="secondary" size="sm">Add payment method</Button>
        </CardSection>

        {/* Invoices */}
        <div>
          <h2 className="mb-4 text-md font-semibold tracking-[0.01em] text-gray-900">
            Invoices
          </h2>
          <div className="flex flex-col gap-2">
            {invoices.map((inv) => (
              <ListItem
                key={inv.id}
                leading={<FileText size={16} className="text-gray-400" />}
                title={inv.date}
                subtitle={`${inv.amount} — ${inv.status}`}
                trailing={
                  <Button variant="ghost" size="sm">Download</Button>
                }
                className="py-3"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
